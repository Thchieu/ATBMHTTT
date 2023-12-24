package entity;

import java.util.ArrayList;
import java.util.TreeMap;

public class Cart {
    private ArrayList<Product> list;
    private long cart_id;

    public Cart() {
      list = new ArrayList<>();
      cart_id = System.currentTimeMillis();
    }

    public Cart(ArrayList<Product> list, long cart_id) {
        this.list = list;
        this.cart_id = cart_id;
    }

    public ArrayList<Product> getList() {
        return list;
    }

    public void setList(ArrayList<Product> list) {
        this.list = list;
    }

    public long getCart_id() {
        return cart_id;
    }

    public void setCart_id(long cart_id) {
        this.cart_id = cart_id;
    }

    //Them san pham vao gio hang

}
