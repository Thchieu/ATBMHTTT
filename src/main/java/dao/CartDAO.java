package dao;

import context.DBConnect;
import entity.Category;
import entity.Product;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;
import java.util.StringTokenizer;
import java.util.logging.Level;
import java.util.logging.Logger;


public class CartDAO {
  public static List<Product> giohang = new ArrayList<>();
    static DAO dao = new DAO();

    public static List<Product> getGiohang() {
        return giohang;
    }

    public static void setGiohang(List<Product> giohang) {
        CartDAO.giohang = giohang;
    }

    public static List<Product> getList() {
        return list;
    }

    public static void setList(List<Product> list) {
        CartDAO.list = list;
    }

    static List<Product> list = dao.getAllProduct();

    public CartDAO() {


    }
    public  boolean addProductToCart(String id){
        boolean check = checkProductToCart(id);
        for(Product p : list){
            if(p.getId().equals(id)){
                giohang.add(p);
                return true;
            }
        }
        return false;
    }
    public  boolean checkProductToCart(String id){
        for(Product p : list){
            if(p.getId().equals(id)){

                return true;
            }
        }
        return false;
    }
    public  boolean delectProductToCart(String id){
        for(Product p : list){
            if(p.getId().equals(id)){
                giohang.remove(p);
                return true;
            }
        }
        return false;
    }
    public void delectAllProductToCart(){
        giohang.removeAll(giohang);
    }

    public static void main(String[] args) {
        DAO dao = new DAO();
        List<Product> list = dao.getAllProduct();
        List<Product> list1 = new ArrayList<>();
        list1.add(dao.getProductByID("1"));
        list1.add(dao.getProductByID("3"));
        list1.removeAll(list1);
        System.out.println(list1);
    }

    }









