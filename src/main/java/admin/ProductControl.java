package admin;

import dao.DAO;
import entity.Category;
import entity.Product;
import entity.User;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.util.List;

@WebServlet(name = "product-control", value = "/product-control")
public class ProductControl extends HttpServlet {
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
                List<Product> list = dao.getAllProduct();
                List<Category> listC = dao.getAllCategory();

                request.setAttribute("listP", list);
                request.setAttribute("listC", listC);
                request.getRequestDispatcher("admin/ProductControl.jsp").forward(request, response);
            }
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
