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
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@WebServlet(name = "CheckoutControl", value = "/CheckoutControl")
public class CheckoutControl extends HttpServlet {
    private BillDAO billDAO = new BillDAO();
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession();
        User user = (User) session.getAttribute("user");
        if(user!=null){
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

        DAO dao = new DAO();
        List<Product> list = CartDAO.getGiohang();

        User user = (User) session.getAttribute("user");
        user.getId();
        Cart cart = (Cart) session.getAttribute("cart");

     try {
         Date date = new Date();
         int invoiceNumber1 = (int) ((Math.random() * 10000000000L) + 1000000000L);
         int count = 0;
         int quantity = 1;
         double total =0;
         double totalproduct = 0;
         int total1 =0;
         for(Product p: list) {
             total += p.getPrice();
             if(total>0
             ){total1 = 35000;}else {total1 =0;}
         }

         Bill bill = new Bill(invoiceNumber1,user,ten,new Timestamp(date.getTime()),dia_chi_giao_hang,pt_thanhtoan,ghichu,total1+total,"1");
         billDAO.addBill(bill);
         for( int i =0; i <= list.size(); i ++) {
                 count +=1;
                 bill.getId();
                 billDAO.addBillDetails(new BillDetails(count, bill, list.get(i), quantity, list.get(i).getPrice()));


         }
         list.clear();
         response.sendRedirect("checkout.jsp");
     }catch (Exception e){
         e.printStackTrace();
     }
    }
}
