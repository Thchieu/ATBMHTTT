package control;

import dao.DAO;
import entity.Product;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@WebServlet(name = "HomeCont", value = "/home")
public class HomeControl extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        DAO dao = new DAO();
        List<Product> list = dao.getSaleProduct();
        List<Product> list1 = dao.getProductByCID("2");
        List<Product> list2 = new ArrayList<>();
        list2.add(dao.getProductByID("4"));
        list2.add(dao.getProductByID("6"));
        list2.add(dao.getProductByID("8"));
        list2.add(dao.getProductByID("10"));
        list2.add(dao.getProductByID("12"));
        list2.add(dao.getProductByID("14"));
        List<Product> list3 = dao.getNewProduct();


        request.setAttribute("listP", list);
        request.setAttribute("listT", list1);
        request.setAttribute("listB", list2);
        request.setAttribute("listA", list3);
        request.getRequestDispatcher("index.jsp").forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
