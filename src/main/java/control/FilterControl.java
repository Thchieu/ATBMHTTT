package control;

import dao.DAO;
import entity.Category;
import entity.Product;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.util.List;

@WebServlet(name = "FilterControl", value = "/FilterControl")
public class FilterControl extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        double giadau = Double.parseDouble(request.getParameter("giadau"));
        double giacuoi = Double.parseDouble(request.getParameter("giacuoi"));
        DAO dao = new DAO();
        List<Category> listC = dao.getAllCategory();
        List<Product> FilterList = dao.getProductByPrice(giadau,giacuoi);
        request.setAttribute("listP", FilterList);
        request.setAttribute("listC", listC);
        request.getRequestDispatcher("list-product.jsp").forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
doGet(request,response);
    }
}
