package entity;

public class BillDetails {
    private int id_cthd;
    private Bill bill;
    private Product product;
    private int soLuong;
    private double dongia;

    public BillDetails(int id_cthd, Bill bill, Product product, int soLuong, double dongia) {
        this.id_cthd = id_cthd;
        this.bill = bill;
        this.product = product;
        this.soLuong = soLuong;
        this.dongia = dongia;
    }

    public int getId_cthd() {
        return id_cthd;
    }

    public void setId_cthd(int id_cthd) {
        this.id_cthd = id_cthd;
    }

    public Bill getBill() {
        return bill;
    }

    public void setBill(Bill bill) {
        this.bill = bill;
    }

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