package control;

import dao.BillDAO;
import dao.CartDAO;
import dao.DAO;
import entity.*;
import org.bouncycastle.util.encoders.UTF8;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.nio.file.FileStore;
import java.security.PrivateKey;
import java.sql.Timestamp;
import java.util.*;

import static entity.ElectronicSignatureVerification.getPrivateKeyFromFile;
import static entity.ElectronicSignatureVerification.signData;

@WebServlet(name = "CheckoutControl", value = "/CheckoutControl")
public class CheckoutControl extends HttpServlet {
    private BillDAO billDAO = new BillDAO();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession();
        User user = (User) session.getAttribute("user");
        if (user != null) {
            request.getRequestDispatcher("checkout").forward(request, response);
        }
        request.getRequestDispatcher("login.jsp").forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession();

        request.setCharacterEncoding("utf-8");
        response.setCharacterEncoding("utf-8");
        int invoiceNumber = (int) ((Math.random() * 10000000000L) + 1000000000L);

        String ten = request.getParameter("ten");
        String dia_chi_giao_hang = request.getParameter("dia_chi_giao_hang");
        String pt_thanhtoan = request.getParameter("pt_thanhtoan");
        String ghichu = request.getParameter("ghichu");
        String password = request.getParameter("password");
        DAO dao = new DAO();
        List<Product> list = CartDAO.getGiohang();

        User user = (User) session.getAttribute("user");
        user.getId();
        Cart cart = (Cart) session.getAttribute("cart");
        try {
            Date date = new Date();
            int invoiceNumber1 = (int) ((Math.random() * 10000000000L) + 1000000000L);

            double total = 0;

            int total1 = 0;

            int userId = Integer.parseInt(user.getId()); // Thay đổi giá trị ID người dùng tương ứng
            String userName = user.getFullName();
            String directory =  "C:\\Users\\DELL\\ATBMHTTT\\key";
            PrivateKey privateKey = getPrivateKeyFromFile(userId, userName,directory);
            String data = ten + " " +dia_chi_giao_hang +" "+pt_thanhtoan +" " +ghichu;
            String signature = signData(data, privateKey);
            String sinature1 = signature;
            HashMap<Product, Integer> map = new HashMap<>();
            for (Product p : list) {
                total += p.getPrice();
                map.put(p, map.getOrDefault(p, 0) + 1);
            }

            Bill bill = new Bill(invoiceNumber1, user, ten, new Timestamp(date.getTime()), dia_chi_giao_hang, pt_thanhtoan, ghichu, total1 + total, sinature1);
            int idBill = billDAO.addBill(bill);
            for (Map.Entry<Product, Integer> entry : map.entrySet()) {
                Product product = entry.getKey();
                int soLuong = entry.getValue();
                System.out.println(idBill);
                billDAO.addBillDetails(new BillDetails(idBill, product, soLuong, product.getPrice()));
            }
            list.clear();
            response.sendRedirect("checkout.jsp");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
