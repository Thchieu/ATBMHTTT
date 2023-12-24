package control;

import dao.CartDAO;
import entity.User;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@WebServlet(name = "Cart1", value = "/cart-cart")
public class Cart1Control extends HttpServlet {
    private final long serialVersionUID =1L;

    public Cart1Control() {
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
            request.getRequestDispatcher("cart.jsp").forward(request, response);
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
