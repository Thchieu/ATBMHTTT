package dao;

import context.DBConnect;
import entity.Bill;
import entity.BillDetails;
import entity.User;

import java.sql.*;

public class BillDAO {
    Connection conn;
    PreparedStatement ps;
    ResultSet rs;

    public int addBill(Bill bill) throws SQLException {
        ResultSet resultSet = null;
        int generatedId = -1;

        String query = "INSERT INTO hoadon (ngaylap_hd,id_ngdung,ten,dia_chi_giao_hang,tongtien,pt_thanhtoan,ghichu,trangthai) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
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
            ps.setString(8, bill.getTrangThai());

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



        public void addBillDetails (BillDetails billDetails){

            String query = "INSERT INTO ct_hoadon (id_hoadon,id_sanpham,soluong,dongia) VALUES\n" +
                    "(?,?,?,?)";
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
    }




