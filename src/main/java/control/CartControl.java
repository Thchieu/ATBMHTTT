package control;

import dao.CartDAO;
import dao.DAO;
import entity.User;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;

@WebServlet(name = "CartControl", value = "/cart")
public class CartControl extends HttpServlet {
    private final long serialVersionUID =1L;

    public CartControl() {
        super();
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String p_id = request.getParameter("id");
        HttpSession session = request.getSession();
        User user = (User) session.getAttribute("user");
        if(user!=null){
            try {
                new CartDAO().addProductToCart(p_id);


            } catch (Exception e) {

            }
            request.getRequestDispatcher("list-product").forward(request, response);
        }

        else {
            new CartDAO().delectAllProductToCart();
            request.getRequestDispatcher("login.jsp").forward(request, response);

        }

    }
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
