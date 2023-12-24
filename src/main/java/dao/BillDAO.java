package dao;

import context.DBConnect;
import entity.Bill;
import entity.BillDetails;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class BillDAO {
    Connection conn;
    PreparedStatement ps;
    ResultSet rs;

    public void addBill(Bill bill){

            String query ="INSERT INTO hoadon (id,ngaylap_hd,id_ngdung,ten,dia_chi_giao_hang,tongtien,pt_thanhtoan,ghichu,trangthai) VALUES\n" +
                    "(?,?,?,?,?,?,?,?,?)";
            try {
                conn = new DBConnect().getConnection();
                ps = conn.prepareStatement(query);
                ps.setInt(1, bill.getId());
                ps.setTimestamp(2,bill.getNgayLap_hoaDon());
                ps.setString(3, bill.getNguoiDung().getId());
                ps.setString(4, bill.getTen());
                ps.setString(5, bill.getDiachi());
                ps.setDouble(6, bill.getTongTien());
                ps.setString(7, bill.getPt_thanhToan());
                ps.setString(8, bill.getGhiChu());
                ps.setString(9, bill.getTrangThai());
                ps.executeUpdate();
            } catch (Exception e) {
            }
    }
    public void addBillDetails(BillDetails billDetails){

        String query ="INSERT INTO ct_hoadon (id,id_hoadon,id_sanpham,soluong,dongia) VALUES\n" +
                "(?,?,?,?,?)";
        try {
            conn = new DBConnect().getConnection();
            ps = conn.prepareStatement(query);
            ps.setInt(1, billDetails.getId_cthd());
            ps.setInt(2,billDetails.getBill().getId());
            ps.setString(3,billDetails.getProduct().getId());
            ps.setInt(4, billDetails.getSoLuong());
            ps.setInt(5, (int) billDetails.getDongia());

            ps.executeUpdate();
        } catch (Exception e) {
        }
    }
}


