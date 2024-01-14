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
import java.security.PublicKey;
import java.sql.Timestamp;
import java.util.*;

import static entity.ElectronicSignatureVerification.*;

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
        String xacminh = request.getParameter("xacminh");
        String keyData = request.getParameter("fileContent");
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
//            String directory = "C:\\Users\\DELL\\Documents";
//            String privateKeyContent = request.getParameter("privateKeyContent");

            PublicKey publicKey = getPublicKeyFromDatabase(userId);
//                 PrivateKey privateKey = getPrivateKeyFromFile(userId, userName,directory);
//                PrivateKey privateKey = ElectronicSignatureVerification.getPrivateKeyFromContent(privateKeyContent);
            PrivateKey privateKey = getPrivateKeyFromContent(keyData);
            String data = ten + " " + dia_chi_giao_hang + " " + pt_thanhtoan + " " + ghichu;
            SHA sha = new SHA();
            String valueHash = SHA.hash(data, sha.SHA_1);
            String signature = signData(valueHash, privateKey);
            String sinature1 = signature;

            boolean isVerified = verifySignature(valueHash, signature, publicKey);
            boolean checkKey = dao.checkKey(userId);

            if (checkKey == true) {
                if (
                        isVerified == true
//                        xacminh.equals(user.getPass())
                ) {

                    HashMap<Product, Integer> map = new HashMap<>();
                    for (Product p : list) {
                        total += p.getPrice();
                        map.put(p, map.getOrDefault(p, 0) + 1);
                    }
                    if (total > 0) {
                        total1 = 35000;
                    } else {
                        total1 = 0;
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
                    request.setAttribute("message", "Đặt hàng thành công");

                    // Chuyển hướng đến trang hiển thị thông báo
                    RequestDispatcher dispatcher = request.getRequestDispatcher("/checkout.jsp");
                    dispatcher.forward(request, response);
                } else {
                    request.setAttribute("message", "Xác thực đơn hàng không thành công");
                    RequestDispatcher dispatcher = request.getRequestDispatcher("/checkout.jsp");
                    dispatcher.forward(request, response);
                }
            } else {

                RequestDispatcher dispatcher = request.getRequestDispatcher("/checkout.jsp");
                dispatcher.forward(request, response);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}


