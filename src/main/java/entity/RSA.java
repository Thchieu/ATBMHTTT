package entity;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.security.Key;
import java.security.KeyFactory;
import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.Security;
import java.security.Signature;
import java.security.spec.PKCS8EncodedKeySpec;
import java.security.spec.X509EncodedKeySpec;
import java.util.Base64;

import javax.crypto.Cipher;

public class RSA {

    public static void main(String[] args) throws Exception {
        // Bước 1: Tạo cặp khóa RSA
        KeyPair keyPair = generateKeyPair();

        // Bước 2: Mã hóa và giải mã với khóa công khai và khóa riêng tư
        String plaintext = "Hello, RSA!";
        String encryptedData = encrypt(plaintext, keyPair.getPublic());
        String decryptedData = decrypt(encryptedData, keyPair.getPrivate());
        String publicKeyBase64 = keyToBase64(keyPair.getPublic());
        String privateKeyBase64 = keyToBase64(keyPair.getPrivate());
        System.out.println(publicKeyBase64);
        System.out.println(privateKeyBase64);
        System.out.println("Original: " + plaintext);
        System.out.println("Encrypted: " + new String(encryptedData));
        System.out.println("Decrypted: " + decryptedData);
    }

    public static KeyPair generateKeyPair() throws Exception {
        KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("RSA");
        keyPairGenerator.initialize(1024); // Độ dài của khóa RSA
        return keyPairGenerator.generateKeyPair();
    }

    public static String encrypt(String data, PublicKey publicKey) throws Exception {
        Cipher cipher = Cipher.getInstance("RSA");
        cipher.init(Cipher.ENCRYPT_MODE, publicKey);
        byte[] encryptedData = cipher.doFinal(data.getBytes());
        return base64Encode(encryptedData); // Trả về chuỗi Base64 từ dữ liệu đã mã hóa
    }

    public static String decrypt(String data, PrivateKey privateKey) throws Exception {
        byte[] encryptedData = base64Decode(data); // Chuyển đổi chuỗi Base64 thành mảng byte
        Cipher cipher = Cipher.getInstance("RSA");
        cipher.init(Cipher.DECRYPT_MODE, privateKey);
        byte[] decryptedData = cipher.doFinal(encryptedData);
        return new String(decryptedData);

    }

    public static String keyToBase64(Key key) {
        byte[] keyBytes = key.getEncoded();
        return Base64.getEncoder().encodeToString(keyBytes);
    }

    public static String base64Encode(byte[] data) {
        return Base64.getEncoder().encodeToString(data);
    }

    public static byte[] base64Decode(String data) {
        return Base64.getDecoder().decode(data);
    }

    public static PublicKey base64ToPublicKey(String base64PublicKey) throws Exception {
        KeyFactory keyFactory = KeyFactory.getInstance("RSA");
        X509EncodedKeySpec keySpecX509 = new X509EncodedKeySpec(Base64.getDecoder().decode(base64PublicKey));
        return keyFactory.generatePublic(keySpecX509);
    }

    public static PrivateKey base64ToPrivateKey(String base64PrivateKey) throws Exception {
        KeyFactory keyFactory = KeyFactory.getInstance("RSA");
        PKCS8EncodedKeySpec keySpecPKCS8 = new PKCS8EncodedKeySpec(Base64.getDecoder().decode(base64PrivateKey));
        return keyFactory.generatePrivate(keySpecPKCS8);
    }

    public static boolean isBase64(String str) {
        try {
            Base64.getDecoder().decode(str);
            return true;
        } catch (IllegalArgumentException e) {
            return false;
        }

    }

    public static boolean isKeyLengthValid(Key key) {
        int keyLength = key.getEncoded().length * 8; // Độ dài khóa tính bằng bit
        return keyLength == 1024;
    }

    public static void encryptFile(String inputFile, String outputFile, PublicKey publicKey) throws Exception {
        Cipher cipher = Cipher.getInstance("RSA");
        cipher.init(Cipher.ENCRYPT_MODE, publicKey);

        try (FileInputStream inputStream = new FileInputStream(inputFile);
             FileOutputStream outputStream = new FileOutputStream(outputFile)) {

            byte[] inputBytes = new byte[117]; // Độ dài của block dữ liệu để mã hóa
            int bytesRead;

            while ((bytesRead = inputStream.read(inputBytes)) > 0) {
                byte[] encryptedData = cipher.doFinal(inputBytes, 0, bytesRead);
                byte[] encodedData = Base64.getEncoder().encode(encryptedData);
                outputStream.write(encodedData);
            }
        }
    }

    public static void decryptFile(String inputFile, String outputFile, PrivateKey privateKey) throws Exception {
        Cipher cipher = Cipher.getInstance("RSA");
        cipher.init(Cipher.DECRYPT_MODE, privateKey);

        try (FileInputStream inputStream = new FileInputStream(inputFile);
             FileOutputStream outputStream = new FileOutputStream(outputFile)) {

            byte[] inputBytes = new byte[172]; // Độ dài của block dữ liệu mã hóa Base64
            int bytesRead;

            while ((bytesRead = inputStream.read(inputBytes)) > 0) {
                byte[] decodedData = Base64.getDecoder().decode(inputBytes);
                byte[] decryptedData = cipher.doFinal(decodedData);
                outputStream.write(decryptedData);
            }
        }
    }
}
