package control;

import context.DBConnect;
import dao.DAO;
import entity.SHA;
import entity.User;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.security.*;
import java.security.spec.X509EncodedKeySpec;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Base64;
import java.util.Date;
import java.util.List;

@WebServlet(name = "PollingServlet", value = "/PollingServlet")
public class PollingServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        try {
            HttpSession session = request.getSession();
            User user = (User) session.getAttribute("user");
            DAO dao = new DAO();

            if (!dao.checkKey(Integer.parseInt(user.getId()))) {
                response.getWriter().write("cancelled");
                return;  // Dừng việc kiểm tra nếu key đã bị hủy
            }

            String keyCreationDate = String.valueOf(dao.getKeyCreationDate(user.getId()));
            List<String> currentData = getDataFromDB(user.getId(), keyCreationDate);
            List<String> signatures = getSignatureFromDatabase(user.getId(), keyCreationDate);
            List<String> id_HoaDon = getIdHoadon(user.getId(), keyCreationDate);
            PublicKey publicKey = getPublicKeyFromDatabase(user.getId());

            if (currentData.isEmpty() || signatures.isEmpty() || id_HoaDon.isEmpty()) {
                // Handle the case where no data is found based on the key creation date
                response.getWriter().write("no_data");
            } else {
                boolean allSignaturesValid = true;
                String error_id = "";
                SHA sha = new SHA();
                for (int i = 0; i < currentData.size(); i++) {
                    String data = SHA.hash(currentData.get(i), sha.SHA_1);
                    boolean signatureValid = verifySignature(data, signatures.get(i), publicKey);

                    if (!signatureValid) {
                        allSignaturesValid = false;
                        error_id = id_HoaDon.get(i);
                        break;  // Dừng kiểm tra nếu có bất kỳ chữ ký nào không hợp lệ
                    }
                }
                if (allSignaturesValid) {
                    response.getWriter().write("true");
                } else {
                    response.getWriter().write("false");
                    session.setAttribute("error_id", error_id);
                }
            }

        } catch (Exception e) {
            log("Đã xảy ra lỗi trong quá trình xác minh chữ ký.", e);
            response.getWriter().write("false");
        }
    }


    private List<String> getIdHoadon(String id_ngdung, String date) {
        List<String> list = new ArrayList<>();
        String res = "";
        try (Connection connection = DBConnect.getConnection()) {
            String sql = "SELECT id FROM hoadon WHERE id_ngdung= ? and ngaylap_hd > ?";
            try (PreparedStatement statement = connection.prepareStatement(sql)) {
                statement.setString(1, id_ngdung);
                statement.setString(2, date);
                try (ResultSet resultSet = statement.executeQuery()) {
                    while (resultSet.next()) {
                        res = resultSet.getString("id");
                        list.add(res);
                    }
                }
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return list;
    }

    private PublicKey getPublicKeyFromDatabase(String userId) throws Exception {
        try (Connection connection = DBConnect.getConnection()) {
            String sql = "SELECT key_value FROM public_keys WHERE user_id = ? and status = 'Xac thuc'";
            try (PreparedStatement statement = connection.prepareStatement(sql)) {
                statement.setString(1, userId);
                try (ResultSet resultSet = statement.executeQuery()) {
                    if (resultSet.next()) {
                        String publicKeyString = resultSet.getString("key_value");
                        return convertStringToPublicKey(publicKeyString);
                    } else {
                        throw new SQLException("Public key not found for user_id " + userId);
                    }
                }
            }
        }
    }

    private PublicKey convertStringToPublicKey(String publicKeyString) throws Exception {
        byte[] publicKeyBytes = Base64.getDecoder().decode(publicKeyString);
        X509EncodedKeySpec keySpec = new X509EncodedKeySpec(publicKeyBytes);
        KeyFactory keyFactory = KeyFactory.getInstance("RSA");
        return keyFactory.generatePublic(keySpec);
    }

    private List<String> getSignatureFromDatabase(String id_ngdung, String date) {
        List<String> list = new ArrayList<>();
        String res = "";
        try (Connection connection = DBConnect.getConnection()) {
            String sql = "SELECT signature FROM hoadon WHERE id_ngdung = ? and ngaylap_hd > ?";
            try (PreparedStatement statement = connection.prepareStatement(sql)) {
                statement.setString(1, id_ngdung);
                statement.setString(2, date);
                try (ResultSet resultSet = statement.executeQuery()) {
                    while (resultSet.next()) {
                        res = resultSet.getString("signature");
                        list.add(res);
                    }
                }
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return list;
    }

    private static List<String> getDataFromDB(String id_ngdung, String date) {
        List<String> list = new ArrayList<>();
        String res = "";
        try (Connection connection = DBConnect.getConnection()) {
            String sql = "SELECT * FROM hoadon WHERE id_ngdung = ? and ngaylap_hd > ?";
            try (PreparedStatement statement = connection.prepareStatement(sql)) {
                statement.setString(1, id_ngdung);
                statement.setString(2, date);
                try (ResultSet resultSet = statement.executeQuery()) {
                    while (resultSet.next()) {
                        res = resultSet.getString("ten") + " " + resultSet.getString("dia_chi_giao_hang") + " " + resultSet.getString("pt_thanhtoan") + " " + resultSet.getString("ghichu");
                        list.add(res);
                    }
                }
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return list;
    }

    private boolean verifySignature(String data, String signature, PublicKey publicKey)
            throws NoSuchAlgorithmException, InvalidKeyException, SignatureException {
        try {
            Signature sign = Signature.getInstance("SHA256withRSA");
            sign.initVerify(publicKey);
            sign.update(data.getBytes());

            byte[] signatureBytes = Base64.getDecoder().decode(signature);
            return sign.verify(signatureBytes);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Xử lý POST request nếu cần
    }

}
