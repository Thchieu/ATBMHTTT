package dao;

import context.DBConnect;
import entity.Bill;
import entity.BillDetails;
import entity.User;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class BillDAO {
    Connection conn;
    PreparedStatement ps;
    ResultSet rs;

    public int addBill(Bill bill) throws SQLException {
        ResultSet resultSet = null;
        int generatedId = -1;

        String query = "INSERT INTO hoadon (ngaylap_hd,id_ngdung,ten,dia_chi_giao_hang,tongtien,pt_thanhtoan,ghichu,signature) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        try {
            conn = new DBConnect().getConnection();
            ps = conn.prepareStatement(query, Statement.RETURN_GENERATED_KEYS);

            ps.setTimestamp(1, bill.getNgayLap_hoaDon());
            ps.setString(2, bill.getNguoiDung().getId());
            ps.setString(3, bill.getTen());
            ps.setString(4, bill.getDiachi());
            ps.setDouble(5, bill.getTongTien());
            ps.setString(6, bill.getPt_thanhToan());
            ps.setString(7, bill.getGhiChu());
            ps.setString(8, bill.getSignature());

            int affectedRows = ps.executeUpdate();
            if (affectedRows > 0) {
                resultSet = ps.getGeneratedKeys();
                if (resultSet.next()) {
                    generatedId = resultSet.getInt(1);
                }
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        } finally {
            if (ps != null) {
                ps.close(); // Đóng PreparedStatement
            }
            if (conn != null) {
                conn.close(); // Đóng Connection
            }
        }

        return generatedId;
    }


    public void addBillDetails(BillDetails billDetails) {

        String query = "INSERT INTO ct_hoadon (id_hoadon,id_sanpham,soluong,dongia) VALUES\n" + "(?,?,?,?)";
        try {
            conn = new DBConnect().getConnection();
            ps = conn.prepareStatement(query);
            ps.setInt(1, billDetails.getId_hd());
            ps.setString(2, billDetails.getProduct().getId());
            ps.setInt(3, billDetails.getSoLuong());
            ps.setInt(4, (int) billDetails.getDongia());

            ps.executeUpdate();
            conn.close();
        } catch (Exception e) {
        }
    }
    public List<Bill> getBillDetails(String userId)  {
        List<Bill> billList = new ArrayList<>();

        String query = "SELECT\n" +
                "    hd.id AS hoadon_id,\n" +
                "    hd.ngaylap_hd,\n" +
                "    GROUP_CONCAT(CONCAT(sp.tensp, ' (', cthd.soluong, ')') SEPARATOR ', ') AS product_info,\n" +

                "    hd.tongtien AS tongtien " +
                "FROM sanpham sp " +
                "JOIN ct_hoadon cthd ON sp.id = cthd.id_sanpham " +
                "JOIN hoadon hd ON hd.id = cthd.id_hoadon " +
                "WHERE hd.id_ngdung=?"+
                "GROUP BY\n" +
                "    hd.id, hd.ngaylap_hd";

        try {
            conn = new DBConnect().getConnection();
            ps = conn.prepareStatement(query);
            ps.setString(1,userId);
            rs = ps.executeQuery();
            while (rs.next()) {
                Bill bill = new Bill();
                bill.setId(rs.getInt("hoadon_id"));
                // Thông tin chi tiết sản phẩm và số lượng đã được gộp trong cột product_info
                bill.setTen(rs.getString("product_info"));
                bill.setNgayLap_hoaDon(rs.getTimestamp("ngaylap_hd"));

                bill.setTongTien(rs.getDouble("tongtien"));

                billList.add(bill);
            }

        }catch (Exception e){

        }
        return billList;
    }

    public static void main(String[] args) throws Exception {
        BillDAO billdao =new BillDAO();
        List<Bill> list = billdao.getBillDetails("10");
        for (Bill o: list) {
            System.out.println(o);
        }
    }

}




