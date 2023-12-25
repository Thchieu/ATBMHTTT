package dao;

import context.DBConnect;
import entity.*;
import entity.CreateKey;
import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.security.KeyPair;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;
import java.util.StringTokenizer;

import static entity.CreateKey.*;
import static entity.RSA.generateKeyPair;


public class DAO {
    Connection conn;
    PreparedStatement ps;
    ResultSet rs;

    public List<Product> getAllProduct(){
        List<Product> list = new ArrayList<>();
        String query = "select * from sanpham";
        try {
            conn = new DBConnect().getConnection();
            ps = conn.prepareStatement(query);
            rs = ps.executeQuery();
            while (rs.next()){
                list.add(new Product(
                        rs.getString(1),
                        rs.getString(2),
                        rs.getString(3),
                        rs.getString(4),
                        rs.getDouble(5),
                        rs.getDouble(6),
                        rs.getString(7)
                ));
            }
        } catch (Exception e) {
        }
        return list;
    }

    public List<Category> getAllCategory(){
        List<Category> list = new ArrayList<>();
        String query = "select * from loaisp";
        try {
            conn = new DBConnect().getConnection();
            ps = conn.prepareStatement(query);
            rs = ps.executeQuery();
            while (rs.next()){
                list.add(new Category(
                        rs.getString(1),
                        rs.getString(2)
                ));
            }
        } catch (Exception e) {
        }
        return list;
    }

    public List<Product> getProductByCID(String cid) {
        List<Product> list = new ArrayList<>();
        String query = "select * from sanpham where id_loaisp = ?";
        try {
            conn = new DBConnect().getConnection();
            ps = conn.prepareStatement(query);
            ps.setString(1, cid);
            rs = ps.executeQuery();
            while (rs.next()){
                list.add(new Product(
                        rs.getString(1),
                        rs.getString(2),
                        rs.getString(3),
                        rs.getString(4),
                        rs.getDouble(5),
                        rs.getDouble(6),
                        rs.getString(7)
                ));
            }
        } catch (Exception e) {
        }
        return list;
    }

    public Product getProductByID(String id) {
        String query = "select * from sanpham where id = ?";
        try {
            conn = new DBConnect().getConnection();
            ps = conn.prepareStatement(query);
            ps.setString(1, id);
            rs = ps.executeQuery();
            while (rs.next()){
                return new Product(
                        rs.getString(1),
                        rs.getString(2),
                        rs.getString(3),
                        rs.getString(4),
                        rs.getDouble(5),
                        rs.getDouble(6),
                        rs.getString(7)
                );
            }
        } catch (Exception e) {
        }
        return null;
    }

    public List<Product> searchByName(String txtSearch) {
        List<Product> list = new ArrayList<>();
        String query = "select * from sanpham where tensp like ?";
        try {
            conn = new DBConnect().getConnection();
            ps = conn.prepareStatement(query);
            ps.setString(1, "%" + txtSearch + "%");
            rs = ps.executeQuery();
            while (rs.next()){
                list.add(new Product(
                        rs.getString(1),
                        rs.getString(2),
                        rs.getString(3),
                        rs.getString(4),
                        rs.getDouble(5),
                        rs.getDouble(6),
                        rs.getString(7)
                ));
            }
        } catch (Exception e) {
        }
        return list;
    }

    public User login(String user, String pass){
        String query = "select * from nguoidung " +
                "where ten_dangnhap = ? and matkhau = ?";
        try {
            conn = new DBConnect().getConnection();
            ps = conn.prepareStatement(query);
            ps.setString(1, user);
            ps.setString(2, pass);
            rs = ps.executeQuery();
            while (rs.next()){
                return new User(
                        rs.getString(1),
                        rs.getString(2),
                        rs.getString(3),
                        rs.getString(4),
                        rs.getString(5),
                        rs.getString(6),
                        rs.getString(7),
                        rs.getInt(8)

                );
            }
        } catch (Exception e) {
        }
        return null;
    }

    public User checkUser(String user){
        String query = "select * from nguoidung " +
                "where ten_dangnhap = ?";
        try {
            conn = new DBConnect().getConnection();
            ps = conn.prepareStatement(query);
            ps.setString(1, user);
            rs = ps.executeQuery();
            while (rs.next()){
                return new User(
                        rs.getString(1),
                        rs.getString(2),
                        rs.getString(3),
                        rs.getString(4),
                        rs.getString(5),
                        rs.getString(6),
                        rs.getString(7),
                        rs.getInt(8)
                );
            }
        } catch (Exception e) {
        }
        return null;
    }

    public User checkEmail(String email) {
        String query = "select * from nguoidung " +
                "where email = ?";
        try {
            conn = new DBConnect().getConnection();
            ps = conn.prepareStatement(query);
            ps.setString(1, email);
            rs = ps.executeQuery();
            while (rs.next()) {
                return new User(
                        rs.getString(1),
                        rs.getString(2),
                        rs.getString(3),
                        rs.getString(4),
                        rs.getString(5),
                        rs.getString(6),
                        rs.getString(7),
                        rs.getInt(8)
                );
            }
        } catch (SQLException e) {
        } catch (Exception e) {
        }
        return null;
    }
    public void signup(String hoten, String sdt, String diachi, String email, String username, String matkhau) {
        String query ="INSERT INTO nguoidung (hoten, sdt, diachi, email, ten_dangnhap, matkhau) VALUES\n" +
                "(?,?,?,?,?,?)";
        try {
            conn = new DBConnect().getConnection();
            ps = conn.prepareStatement(query);
            ps.setString(1, hoten);
            ps.setString(2, sdt);
            ps.setString(3, diachi);
            ps.setString(4, email);
            ps.setString(5, username);
            ps.setString(6, matkhau);
            ps.executeUpdate();
        } catch (Exception e) {
        }
    }

    public int getTotalProduct(){
        String query = "select count(*) from sanpham";
        try {
            conn = new DBConnect().getConnection();
            ps = conn.prepareStatement(query);
            rs = ps.executeQuery();
            while (rs.next()){
                return rs.getInt(1);
            }
        } catch (Exception e) {
        }
        return 0;
    }

    public List<Product> pagingProduct(int index){
        List<Product> list = new ArrayList<>();
        String query = "select * from sanpham limit ?, 10";

        try {
            conn = new DBConnect().getConnection();
            ps = conn.prepareStatement(query);
            ps.setInt(1, (index - 1) * 10);
            rs = ps.executeQuery();
            while (rs.next()){
                list.add(new Product(
                        rs.getString(1),
                        rs.getString(2),
                        rs.getString(3),
                        rs.getString(4),
                        rs.getDouble(5),
                        rs.getDouble(6),
                        rs.getString(7)
                ));
            }
        } catch (Exception e) {
        }
        return list;
    }

    public List<Category> getCategoryByPID(String pID){
        List<Category> list = new ArrayList<>();
        String query = "select * from loaisp where id = ?";
        try {
            conn = new DBConnect().getConnection();
            ps = conn.prepareStatement(query);
            ps.setString(1, pID);
            rs = ps.executeQuery();
            while (rs.next()){
                list.add(new Category(
                        rs.getString(1),
                        rs.getString(2)
                ));
            }
        } catch (Exception e) {
        }
        return list;
    }


    public void changePass(String username, String pass){
        String query = "update nguoidung\n" +
                "SET matkhau = ?\n" +
                "WHERE ten_dangnhap = ?";
        try {
            conn = new DBConnect().getConnection();
            ps = conn.prepareStatement(query);
            ps.setString(1, pass);
            ps.setString(2, username);
            ps.executeUpdate();
        } catch (Exception e){
        }
    }

    public static void sendMail(String to, String subject, String text) {
        String username ="caodat.ltw@gmail.com";
        String password ="hdrdxvrstejsioem";
        Properties prop = new Properties();
        prop.put("mail.smtp.host", "smtp.gmail.com");
        prop.put("mail.smtp.port", "587");
        prop.put("mail.smtp.auth", "true");
        prop.put("mail.smtp.starttls.enable", "true");
        Session session = Session.getInstance(prop,
                new javax.mail.Authenticator() {
                    protected PasswordAuthentication getPasswordAuthentication() {
                        return new PasswordAuthentication(username, password);
                    }
                });
        try {
            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress(username));
            message.setRecipients(
                    Message.RecipientType.TO,
                    InternetAddress.parse(to)
            );
            message.setSubject(subject);
            message.setText(text);
            Transport.send(message);
        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }

    public void passRecovery(String email) {
        sendMail(email, "PassWord","Your Account PassWord: " + checkEmail(email).getPass());
    }

    public List<String> listImage(String pID){
        String query = "select anhchitiet from chitietsanpham where id_sanpham = ?";
        List<String> image = new ArrayList<>();
        String listImage = "";
        try {
            conn = new DBConnect().getConnection();
            ps = conn.prepareStatement(query);
            ps.setString(1, pID);
            rs = ps.executeQuery();
            while (rs.next()) {
                listImage = rs.getString(1);
            }
        } catch (Exception e){
        }
        StringTokenizer st = new StringTokenizer(listImage, ";");
        while (st.hasMoreTokens()){
            image.add(st.nextToken());
        }
        return image;

    }

    public void changeProfile(String fullname, String email, String username, String phone, String address, String id){
        String query = "update nguoidung\n" +
                "SET hoten = ?, diachi = ?, sdt = ?, ten_dangnhap = ?\n" +
                "WHERE id = ?";
        try {
            conn = new DBConnect().getConnection();
            ps = conn.prepareStatement(query);
            ps.setString(1, fullname);
            ps.setString(2, address);
            ps.setString(3, phone);
            ps.setString(4, username);
            ps.setString(5, id);
            ps.executeUpdate();
        } catch (Exception e){
        }
    }

    public List<Blog> getAllBlog(){
        List<Blog> list = new ArrayList<>();
        String query = "select * from tintuc";
        try {
            conn = new DBConnect().getConnection();
            ps = conn.prepareStatement(query);
            rs = ps.executeQuery();
            while (rs.next()){
                list.add(new Blog(
                        rs.getString(1),
                        rs.getString(2),
                        rs.getString(3),
                        rs.getString(4),
                        rs.getString(5),
                        rs.getString(6),
                        rs.getString(7),
                        rs.getString(8)
                ));
            }
        } catch (Exception e){
        }
        return list;
    }

    public Blog getBlogByID(String id) {
        String query = "select * from tintuc where id = ?";
        try {
            conn = new DBConnect().getConnection();
            ps = conn.prepareStatement(query);
            ps.setString(1, id);
            rs = ps.executeQuery();
            while (rs.next()){
                return new Blog(
                        rs.getString(1),
                        rs.getString(2),
                        rs.getString(3),
                        rs.getString(4),
                        rs.getString(5),
                        rs.getString(6),
                        rs.getString(7),
                        rs.getString(8)
                );
            }
        } catch (Exception e){
        }
        return null;
    }

    public List<Product> getNewProduct(){
        List<Product> list = new ArrayList<>();
        String query = "select * from sanpham limit 10";
        try {
            conn = new DBConnect().getConnection();
            ps = conn.prepareStatement(query);
            rs = ps.executeQuery();
            while (rs.next()){
                list.add(new Product(
                        rs.getString(1),
                        rs.getString(2),
                        rs.getString(3),
                        rs.getString(4),
                        rs.getDouble(5),
                        rs.getDouble(6),
                        rs.getString(7)
                ));
            }
        } catch (Exception e) {
        }
        return list;
    }

    public List<Product> getSaleProduct(){
        List<Product> list = new ArrayList<>();
        String query = "select * from sanpham order by giagoc asc limit 10";
        try {
            conn = new DBConnect().getConnection();
            ps = conn.prepareStatement(query);
            rs = ps.executeQuery();
            while (rs.next()){
                list.add(new Product(
                        rs.getString(1),
                        rs.getString(2),
                        rs.getString(3),
                        rs.getString(4),
                        rs.getDouble(5),
                        rs.getDouble(6),
                        rs.getString(7)
                ));
            }
        } catch (Exception e) {
        }
        return list;
    }

    public int getTotalUser(){
        String query = "Select count(*) from nguoidung";
        try {
            conn = new DBConnect().getConnection();
            ps = conn.prepareStatement(query);
            rs = ps.executeQuery();
            while (rs.next()){
                return rs.getInt(1);
            }

        } catch (Exception e){
        }
        return 0;
    }

    public List<User> getNewUser(){
        List<User> list = new ArrayList<>();
        String query = "Select * from nguoidung order by id desc limit 5";
        try {
            conn = new DBConnect().getConnection();
            ps = conn.prepareStatement(query);
            rs = ps.executeQuery();
            while (rs.next()){
                list.add(new User(
                        rs.getString(1),
                        rs.getString(2),
                        rs.getString(3),
                        rs.getString(4),
                        rs.getString(5),
                        rs.getString(6),
                        rs.getString(7),
                        rs.getInt(8)
                ));
            }
        } catch (Exception e) {
        }
        return list;
    }

    public void deleteProduct(String pID){
        String query ="delete from sanpham where id = ?";
        try {
            conn = new DBConnect().getConnection();
            ps = conn.prepareStatement(query);
            ps.setString(1, pID);
            ps.executeUpdate();
        } catch (Exception e){
        }
    }

    public void insertProduct(String name, String des, String image, String price, String priceDis, String cateID){
        String query ="INSERT INTO `sanpham` ( `tensp`, `mota`, `hinhanh`, `giagoc`, `giakm`, `id_loaisp`) " +
                "VALUES(?,?,?,?,?,?)";
        try {
            conn = new DBConnect().getConnection();
            ps = conn.prepareStatement(query);
            ps.setString(1, name);
            ps.setString(2, des);
            ps.setString(3, image);
            ps.setString(4, price);
            ps.setString(5, priceDis);
            ps.setString(6, cateID);
            ps.executeUpdate();
        } catch (Exception e){
        }
    }

    public boolean updateProduct(String id, String name, String des, String image, String price, String priceDis, String cateID){
        String query = "update sanpham set tensp = ?,\n" +
                "mota = ?,\n" +
                "hinhanh = ?,\n" +
                "giagoc = ?,\n" +
                "giakm = ?,\n" +
                "id_loaisp = ?\n" +
                "WHERE id = ?";
        try {
            conn = new DBConnect().getConnection();
            ps = conn.prepareStatement(query);
            ps.setString(1, name);
            ps.setString(2, des);
            ps.setString(3, image);
            ps.setString(4, price);
            ps.setString(5, priceDis);
            ps.setString(6, cateID);
            ps.setString(7, id);
            ps.executeUpdate();
            return true;
        } catch (Exception e) {

        }
        return false;
    }

    public List<User> getAllUser(){
        List<User> list = new ArrayList<>();
        String query = "select * from nguoidung";
        try {
            conn = new DBConnect().getConnection();
            ps = conn.prepareStatement(query);
            rs = ps.executeQuery();
            while (rs.next()){
                list.add(new User(
                        rs.getString(1),
                        rs.getString(2),
                        rs.getString(3),
                        rs.getString(4),
                        rs.getString(5),
                        rs.getString(6),
                        rs.getString(7),
                        rs.getInt(8)
                ));
            }
        } catch (Exception e) {
        }
        return list;
    }

    public void deleteUser(String uID){
        String query ="delete from nguoidung where id = ?";
        try {
            conn = new DBConnect().getConnection();
            ps = conn.prepareStatement(query);
            ps.setString(1, uID);
            ps.executeUpdate();
        } catch (Exception e){
        }
    }

    public static void main(String[] args) {
        DAO dao = new DAO();
        List<User> list = dao.getAllUser();
        for(User u : list){
            System.out.println(u);
        }

    }
  public List<Product> getProductByPrice(double giadau, double giacuoi) {
        List<Product> list = new ArrayList<>();
        String query = "select * from sanpham where giagoc between ? and ?";
        try {
            conn = new DBConnect().getConnection();
            ps = conn.prepareStatement(query);
            ps.setDouble(1,giadau);
            ps.setDouble(2, giacuoi);
            rs = ps.executeQuery();
            while (rs.next()) {
                list.add(new Product(
                        rs.getString(1),
                        rs.getString(2),
                        rs.getString(3),
                        rs.getString(4),
                        rs.getDouble(5),
                        rs.getDouble(6),
                        rs.getString(7)
                ));
            }
        } catch (Exception e) {
        }
        return list;
    }
    public void insertCategory( String cName){
        String query ="INSERT INTO `loaisp` (  `tenloai`) " +
                "VALUES(?)";
        try {
            conn = new DBConnect().getConnection();
            ps = conn.prepareStatement(query);
            ps.setString(1, cName);

            ps.executeUpdate();
        } catch (Exception e){
        }
    }
    public void deleteCategory(String cID ) {
        String query = "delete from loaisp where id = ?";
        try {
            conn = new DBConnect().getConnection();
            ps = conn.prepareStatement(query);
            ps.setString(1, cID);
            ps.executeUpdate();
        } catch (Exception e) {
        }


    }
    public boolean updateCategory(String id, String name){
        String query = "update loaisp set tenloai = ?,\n" +

                "WHERE id = ?";
        try {
            conn = new DBConnect().getConnection();
            ps = conn.prepareStatement(query);
            ps.setString(1, id);
            ps.setString(2, name);
            ps.executeUpdate();
            return true;
        } catch (Exception e) {

        }
        return false;
    }
     public List<Product> getAllProductAToZ(){
        List<Product> list = new ArrayList<>();
        String query = "SELECT *\n" +
                "from sanpham\n" +
                "ORDER BY tensp ASC";
        try {
            conn = new DBConnect().getConnection();
            ps = conn.prepareStatement(query);
            rs = ps.executeQuery();
            while (rs.next()){
                list.add(new Product(
                        rs.getString(1),
                        rs.getString(2),
                        rs.getString(3),
                        rs.getString(4),
                        rs.getDouble(5),
                        rs.getDouble(6),
                        rs.getString(7)
                ));
            }
        } catch (Exception e) {
        }
        return list;
    }
    public List<Product> getAllProductZToA(){
        List<Product> list = new ArrayList<>();
        String query = "SELECT *\n" +
                "from sanpham\n" +
                "ORDER BY tensp DESC ";
        try {
            conn = new DBConnect().getConnection();
            ps = conn.prepareStatement(query);
            rs = ps.executeQuery();
            while (rs.next()){
                list.add(new Product(
                        rs.getString(1),
                        rs.getString(2),
                        rs.getString(3),
                        rs.getString(4),
                        rs.getDouble(5),
                        rs.getDouble(6),
                        rs.getString(7)
                ));
            }
        } catch (Exception e) {
        }
        return list;
    }
    public List<Product> getAllProductMinToMax(){
        List<Product> list = new ArrayList<>();
        String query = "SELECT *\n" +
                "from sanpham\n" +
                "ORDER BY giagoc ASC  ";
        try {
            conn = new DBConnect().getConnection();
            ps = conn.prepareStatement(query);
            rs = ps.executeQuery();
            while (rs.next()){
                list.add(new Product(
                        rs.getString(1),
                        rs.getString(2),
                        rs.getString(3),
                        rs.getString(4),
                        rs.getDouble(5),
                        rs.getDouble(6),
                        rs.getString(7)
                ));
            }
        } catch (Exception e) {
        }
        return list;
    }
    public List<Product> getAllProductMaxToMin(){
        List<Product> list = new ArrayList<>();
        String query = "SELECT *\n" +
                "from sanpham\n" +
                "ORDER BY giagoc DESC  ";
        try {
            conn = new DBConnect().getConnection();
            ps = conn.prepareStatement(query);
            rs = ps.executeQuery();
            while (rs.next()){
                list.add(new Product(
                        rs.getString(1),
                        rs.getString(2),
                        rs.getString(3),
                        rs.getString(4),
                        rs.getDouble(5),
                        rs.getDouble(6),
                        rs.getString(7)
                ));
            }
        } catch (Exception e) {
        }
        return list;
    }

    public int addHoaDon(int idNguoiDung) {
        return idNguoiDung;
    }

    public void addCTHoaDon(int idHoaDon, int soLuong, int idSanPham) {
    }
    public void create_key(){
        final String DB_URL = "jdbc:mysql://localhost:3306/data";
        final String DB_USER = "root";
        final String DB_PASSWORD = "";
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
    }

