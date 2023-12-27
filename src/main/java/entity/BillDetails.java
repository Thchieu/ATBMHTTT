package entity;

public class BillDetails {
    private int id_hd;
    private Product product;
    private int soLuong;
    private double dongia;

    public BillDetails(int id_hd, Product product, int soLuong, double dongia) {
        this.id_hd = id_hd;
        this.product = product;
        this.soLuong = soLuong;
        this.dongia = dongia;
    }

    public int getId_hd() {
        return id_hd;
    }

    public void setId_hd(int id_hd) {
        this.id_hd = id_hd;
    }

//    public Bill getBill() {
//        return bill;
//    }
//
//    public void setBill(Bill bill) {
//        this.bill = bill;
//    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public int getSoLuong() {
        return soLuong;
    }

    public void setSoLuong(int soLuong) {
        this.soLuong = soLuong;
    }

    public double getDongia() {
        return dongia;
    }

    public void setDongia(double dongia) {
        this.dongia = dongia;
    }
}