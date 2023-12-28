package control;

import java.io.IOException;
import java.io.PrintWriter;
import java.security.*;
import java.security.spec.PKCS8EncodedKeySpec;
import java.security.spec.X509EncodedKeySpec;
import java.util.Base64;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/DigitalSignatureServlet")
public class DigitalSignatureServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            // Đọc thông tin hóa đơn từ request (ở đây là ví dụ)
            String invoiceInfo = request.getParameter("invoiceInfo");

            // Tạo cặp khóa (Private và Public)
            KeyPair keyPair = generateKeyPair();

            // Ký số hóa đơn bằng chữ ký số riêng tư
            String digitalSignature = signData(invoiceInfo, keyPair.getPrivate());

            // Hiển thị thông tin hóa đơn và chữ ký điện tử
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Digital Signature Example</title>");
            out.println("</head>");
            out.println("<body>");
            out.println("<h2>Invoice Information:</h2>");
            out.println("<p>" + invoiceInfo + "</p>");
            out.println("<h2>Digital Signature:</h2>");
            out.println("<p>" + digitalSignature + "</p>");
            out.println("</body>");
            out.println("</html>");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // Hàm tạo cặp khóa
    private KeyPair generateKeyPair() throws NoSuchAlgorithmException {
        KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("RSA");
        keyPairGenerator.initialize(2048);
        return keyPairGenerator.generateKeyPair();
    }

    // Hàm ký số dữ liệu bằng chữ ký số riêng tư
    private String signData(String data, PrivateKey privateKey) throws Exception {
        Signature signature = Signature.getInstance("SHA256withRSA");
        signature.initSign(privateKey);
        signature.update(data.getBytes());
        byte[] signatureBytes = signature.sign();
        return Base64.getEncoder().encodeToString(signatureBytes);
    }
}