package control;

import dao.DAO;
import entity.Category;
import entity.Product;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.awt.*;
import java.io.IOException;
import java.util.List;

@WebServlet(name = "HomeControl", value = "/list-product")
public class ListPControl extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String indexPage = request.getParameter("index");
        if(indexPage == null){
            indexPage = "1";
        }
        int index = Integer.parseInt(indexPage);

        String mID = request.getParameter("mID");
        DAO dao = new DAO();
        Product p = dao.getProductByID(mID);
        List<Product> list = dao.getAllProduct();
        List<Category> listC = dao.getAllCategory();
        int count = dao.getTotalProduct();
        int numOfProduct = 10;
        int endPage = count/numOfProduct;
        if(count % numOfProduct != 0){
            endPage++;
        }
        List<Product> listPP = dao.pagingProduct(index);

        request.setAttribute("endP", endPage);
        request.setAttribute("listP", list);
        request.setAttribute("listC", listC);
        request.setAttribute("listP", listPP);
        request.setAttribute("indexPage", index);
        request.setAttribute("modal", p);
        request.setAttribute("mID", mID);
        request.getRequestDispatcher("list-product.jsp").forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
