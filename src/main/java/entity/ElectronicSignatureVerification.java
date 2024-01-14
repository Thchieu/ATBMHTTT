package entity;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.security.*;
import java.security.spec.PKCS8EncodedKeySpec;
import java.security.spec.X509EncodedKeySpec;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.Base64;

public class ElectronicSignatureVerification{
    private static final String DB_URL = "jdbc:mysql://localhost:3306/petmark";
    private static final String DB_USER = "root";
    private static final String DB_PASSWORD = "";

    public static void main(String[] args) {
        try {
            // Lấy public key từ cơ sở dữ liệu
            PublicKey publicKey = getPublicKeyFromDatabase(2); // Thay đổi giá trị ID người dùng tương ứng

            // Lấy private key từ file
            int userId = 2; // Thay đổi giá trị ID người dùng tương ứng
            String userName = "chieu";
            String directory =  "C:\\Users\\DELL\\ATBMHTTT\\key";
            PrivateKey privateKey = getPrivateKeyFromFile(userId, userName,directory);

            // Người mua sử dụng private key để tạo chữ ký cho dữ liệu
            String data = "Data to be signed";
            String signature = signData(data, privateKey);

            // Người bán nhận được dữ liệu và chữ ký, sử dụng public key để xác minh chữ ký
            boolean isVerified = verifySignature(data, signature, publicKey);

            System.out.println("Signature is verified: " + isVerified);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static PublicKey getPublicKeyFromDatabase(int userId) throws Exception {
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        ResultSet resultSet = null;

        try {
            connection = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);

            // Chuẩn bị truy vấn để lấy public key từ cơ sở dữ liệu
            String selectQuery = "SELECT key_value FROM public_keys WHERE user_id = ?";
            preparedStatement = connection.prepareStatement(selectQuery);
            preparedStatement.setInt(1, userId);

            resultSet = preparedStatement.executeQuery();

            if (resultSet.next()) {
                // Lấy giá trị public key từ cơ sở dữ liệu
                String publicKeyBase64 = resultSet.getString("key_value");

                // Chuyển đổi public key từ Base64 về byte array
                byte[] publicKeyBytes = Base64.getDecoder().decode(publicKeyBase64);

                // Chuyển đổi byte array sang đối tượng PublicKey
                KeyFactory keyFactory = KeyFactory.getInstance("RSA");
                X509EncodedKeySpec keySpec = new X509EncodedKeySpec(publicKeyBytes);
                return keyFactory.generatePublic(keySpec);
            } else {
                throw new RuntimeException("Public key not found for user with ID: " + userId);
            }
        } finally {
            // Đóng các tài nguyên
            if (resultSet != null) resultSet.close();
            if (preparedStatement != null) preparedStatement.close();
            if (connection != null) connection.close();
        }
    }

    public static PrivateKey getPrivateKeyFromFile(int userId, String userName, String directory) throws Exception {
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        ResultSet resultSet = null;

        try {
            connection = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);

            // Chuẩn bị truy vấn để lấy tên file private key từ cơ sở dữ liệu
            String selectFileNameQuery = "SELECT user_id, user_name FROM public_keys WHERE user_id = ?";
            preparedStatement = connection.prepareStatement(selectFileNameQuery);
            preparedStatement.setInt(1, userId);

            resultSet = preparedStatement.executeQuery();

            if (resultSet.next()) {
                // Lấy thông tin từ cơ sở dữ liệu
                int dbUserId = resultSet.getInt("user_id");
                String dbUserName = resultSet.getString("user_name");

                // Tạo tên file từ thông tin lấy từ cơ sở dữ liệu
                String fileName = dbUserId + "_" + dbUserName + "_private_key.pem";

                // Đọc dữ liệu từ file
                Path filePath = Paths.get(directory, fileName);
                byte[] keyBytes = Files.readAllBytes(filePath);

                // Chuyển đổi dữ liệu từ Base64 về byte array
                byte[] decodedKey = Base64.getDecoder().decode(keyBytes);

                // Chuyển đổi private key từ byte array về đối tượng PrivateKey
                KeyFactory keyFactory = KeyFactory.getInstance("RSA");
                PKCS8EncodedKeySpec keySpec = new PKCS8EncodedKeySpec(decodedKey);
                return keyFactory.generatePrivate(keySpec);
            } else {
                throw new RuntimeException("Private key file not found for user with ID: " + userId);
            }
        } finally {
            // Đóng các tài nguyên
            if (resultSet != null) resultSet.close();
            if (preparedStatement != null) preparedStatement.close();
            if (connection != null) connection.close();
        }
    }


    public static String signData(String data, PrivateKey privateKey) throws Exception {
        Signature signature = Signature.getInstance("SHA256withRSA");
        signature.initSign(privateKey);
        signature.update(data.getBytes());
        byte[] signedBytes = signature.sign();
        return Base64.getEncoder().encodeToString(signedBytes);
    }

    public static boolean verifySignature(String data, String signature, PublicKey publicKey) throws Exception {
        Signature sig = Signature.getInstance("SHA256withRSA");
        sig.initVerify(publicKey);
        sig.update(data.getBytes());
        byte[] signatureBytes = Base64.getDecoder().decode(signature);
        return sig.verify(signatureBytes);
    }
    public static PrivateKey getPrivateKeyFromContent(String privateKeyContent) throws Exception {
        // Convert private key content from Base64 to byte array
        byte[] privateKeyBytes = Base64.getDecoder().decode(privateKeyContent);

        // Convert byte array to PrivateKey
        KeyFactory keyFactory = KeyFactory.getInstance("RSA");
        PKCS8EncodedKeySpec keySpec = new PKCS8EncodedKeySpec(privateKeyBytes);
        return keyFactory.generatePrivate(keySpec);
    }
}
