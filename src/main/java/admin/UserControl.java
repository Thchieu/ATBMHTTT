package admin;

import dao.DAO;
import entity.User;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.util.List;

@WebServlet(name = "user-control", value = "/user-control")
public class UserControl extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession();
        User u = (User) session.getAttribute("user");
        if(u == null) {
            response.sendRedirect("login");
        } else {
            if (u.getAdmin() == 1) {
                response.sendRedirect("home");
            } else {
                DAO dao = new DAO();
                List<User> list = dao.getAllUser();

                request.setAttribute("listU", list);
                request.getRequestDispatcher("admin/UserControl.jsp").forward(request, response);
            }
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
