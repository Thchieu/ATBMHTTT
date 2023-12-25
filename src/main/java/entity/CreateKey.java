package entity;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.spec.PKCS8EncodedKeySpec;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.Base64;

public class CreateKey {
    private static final String DB_URL = "jdbc:mysql://localhost:3306/data";
    private static final String DB_USER = "root";
    private static final String DB_PASSWORD = "";

    public static void main(String[] args) {
        try {
            // Kết nối đến cơ sở dữ liệu
            Connection connection = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);

            // Lấy thông tin người dùng từ bảng nguoidung
            String selectQuery = "SELECT id, hoten FROM nguoidung";
            PreparedStatement selectStatement = connection.prepareStatement(selectQuery);
            ResultSet resultSet = selectStatement.executeQuery();

            while (resultSet.next()) {
                int userId = resultSet.getInt("id");
                String userName = resultSet.getString("hoten");
                if (!isUserIdExists(userId)) {
                    // Tạo và lưu khóa
                    generateAndStoreKeyPair(userId, userName);
                } else {
                    System.out.println("Key pair not generated for user " + userName + " because user_id already exists.");
                }
            }

            // Đóng các tài nguyên
            resultSet.close();
            selectStatement.close();
            connection.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void generateAndStoreKeyPair(int userId, String userName) {
        try {
            // Tạo cặp khóa cho người dùng
            KeyPair keyPair = generateKeyPair();

            // Lưu trữ public key vào cơ sở dữ liệu
            storePublicKeyInDatabase(userId, userName, keyPair.getPublic());

            // Lưu trữ private key vào file
            storePrivateKeyInFile(userId, userName, keyPair.getPrivate(),"/ltw22-main/key","private_key.pem");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static boolean isUserIdExists(int userId) {
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        ResultSet resultSet = null;

        try {
            connection = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);

            String checkUserIdQuery = "SELECT COUNT(*) FROM public_keys WHERE user_id = ?";
            preparedStatement = connection.prepareStatement(checkUserIdQuery);
            preparedStatement.setInt(1, userId);

            resultSet = preparedStatement.executeQuery();
            resultSet.next();

            // Lấy số lượng bản ghi có user_id cụ thể
            int count = resultSet.getInt(1);

            return count > 0; // Nếu count > 0, tức là user_id đã tồn tại
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        } finally {
            try {
                if (resultSet != null) {
                    resultSet.close();
                }
                if (preparedStatement != null) {
                    preparedStatement.close();
                }
                if (connection != null) {
                    connection.close();
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
    private static KeyPair generateKeyPair() throws Exception {
        KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("RSA");
        keyPairGenerator.initialize(2048);
        return keyPairGenerator.generateKeyPair();
    }

    public static void storePublicKeyInDatabase(int userId, String userName, PublicKey publicKey) {
        Connection connection = null;
        PreparedStatement preparedStatement = null;

        try {
            connection = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);

            // Chuẩn bị truy vấn để chèn public key vào cơ sở dữ liệu
            String insertQuery = "INSERT INTO public_keys (user_id, user_name, key_value,status) VALUES (?, ?, ?,?)";
            preparedStatement = connection.prepareStatement(insertQuery);

            // Chuyển đổi public key thành một định dạng có thể lưu trữ (ví dụ: Base64)
            String publicKeyString = Base64.getEncoder().encodeToString(publicKey.getEncoded());

            // Đặt giá trị của public key vào truy vấn
            preparedStatement.setInt(1, userId);
            preparedStatement.setString(2, userName);
            preparedStatement.setString(3, publicKeyString);
            preparedStatement.setString(4, "Xac thuc");
            ;

            // Thực hiện truy vấn
            preparedStatement.executeUpdate();

            System.out.println("Public key stored in the database for user " + userName);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try {
                if (preparedStatement != null) {
                    preparedStatement.close();
                }
                if (connection != null) {
                    connection.close();
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    public static void storePrivateKeyInFile(int userId, String userName, PrivateKey privateKey, String directory, String fileName) throws Exception {
        // Chuyển đổi private key thành định dạng PKCS8
        PKCS8EncodedKeySpec pkcs8EncodedKeySpec = new PKCS8EncodedKeySpec(privateKey.getEncoded());

        // Tạo đường dẫn đầy đủ đến thư mục và file
        Path path = Paths.get(directory, userId + "_" + userName + "_" + fileName);

        // Lưu trữ private key vào file
        Files.write(path, Base64.getEncoder().encode(pkcs8EncodedKeySpec.getEncoded()));

        System.out.println("Private key stored in the file: " + path);
    }

}
