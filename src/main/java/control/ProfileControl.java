package control;

import dao.BillDAO;
import dao.DAO;
import entity.Bill;
import entity.User;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.util.List;

@WebServlet(name = "profile", value = "/profile")
public class ProfileControl extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session1 = request.getSession();
        Object userObj = session1.getAttribute("user");
        if (userObj != null) {
            User user = (User) userObj;
            String userId = user.getId();

            BillDAO billDAO = new BillDAO();
            List<Bill> billList = billDAO.getBillDetails(userId);

            // Lưu danh sách hóa đơn vào session
            session1.setAttribute("userBills", billList);
        }
        HttpSession session = request.getSession();
        Object o = session.getAttribute("user");
        if(o == null) {
            response.sendRedirect("login");
        } else {
            request.getRequestDispatcher("profile.jsp").forward(request, response);
        }

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        String fullname = request.getParameter("fullname");
        String username = request.getParameter("username");
        String email = request.getParameter("email");
        String phone = request.getParameter("phone");
        String address = request.getParameter("address");

        HttpSession session = request.getSession();
        Object o = session.getAttribute("user");
        User u = (User) o;

        DAO dao = new DAO();
        dao.changeProfile(fullname, email, username, phone, address, u.getId());
        request.setAttribute("mess", "thanh cong");
        request.getRequestDispatcher("profile.jsp");

    }
}
