package entity;

import java.io.File;
import java.io.FileInputStream;
import java.math.BigInteger;
import java.security.MessageDigest;


public class SHA {
    public static String SHA_1 = "SHA-1";
    public static String SHA_224 = "SHA-224";
    public static String SHA_256 = "SHA-256";
    public static String SHA_384 = "SHA_384";
    public static String SHA_512_224 = "SHA-512/224";

    public static String hash(String mess, String algorithms) {
        try {
            MessageDigest md = MessageDigest.getInstance(algorithms);
            byte[] messageDigest = md.digest(mess.getBytes());
            BigInteger number = new  BigInteger(1,messageDigest);
            String hashtext = number.toString(16);
            return hashtext;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "";

    }
    public static String hashFile(File file, String algorithms) {
        try (FileInputStream fis = new FileInputStream(file)) {
            MessageDigest md = MessageDigest.getInstance(algorithms);
            byte[] buffer = new byte[8192];
            int bytesRead;
            while ((bytesRead = fis.read(buffer)) != -1) {
                md.update(buffer, 0, bytesRead);
            }
            byte[] messageDigest = md.digest();
            BigInteger number = new BigInteger(1, messageDigest);
            return number.toString(16);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "";
    }

    public static void main(String[] args) {
        SHA sha = new SHA();
        String valueTest = sha.hash("thanh", sha.SHA_1);
        System.out.println(valueTest);
        File file = new File("C:\\Users\\DELL\\Documents\\qltt8.txt");
        String fileHash = sha.hashFile(file, sha.SHA_1);
        System.out.println("Hash of file: " + fileHash);
    }
}
