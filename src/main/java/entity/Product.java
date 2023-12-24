package entity;

import java.io.Serializable;

public class Product implements Serializable {

    private String id;
    private String name;
    private String des;
    private String image;
    private double price;
    private double priceDis;
    private String cateID;

    public Product() {
    }

    public Product(String id, String name, String des, String image, double price, double priceDis, String cateID) {
        this.id = id;
        this.name = name;
        this.des = des;
        this.image = image;
        this.price = price;
        this.priceDis = priceDis;
        this.cateID = cateID;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDes() {
        return des;
    }

    public void setDes(String des) {
        this.des = des;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public double getPriceDis() {
        return priceDis;
    }

    public void setPriceDis(double priceDis) {
        this.priceDis = priceDis;
    }

    public String getCateID() {
        return cateID;
    }

    public void setCateID(String cateID) {
        this.cateID = cateID;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", des='" + des + '\'' +
                ", image='" + image + '\'' +
                ", price=" + price +
                ", priceDis=" + priceDis +
                ", cateID='" + cateID + '\'' +
                '}';
    }
}
