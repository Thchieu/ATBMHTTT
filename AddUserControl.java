package admin;

import dao.DAO;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name = "adduser", value = "/add-user")
public class AddUserControl extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        String pName = request.getParameter("name");
        String pImage = request.getParameter("image");
        String pPrice = request.getParameter("price");
        String pPriceDis = request.getParameter("priceDis");
        String pDes = request.getParameter("description");
        String pCategory = request.getParameter("category");
        String admin = request.getParameter("admin");

        DAO dao = new DAO();
        dao.insertUser(pName, pImage, pPrice,  pPriceDis, pDes ,pCategory, Integer.parseInt(admin));
        response.sendRedirect("user-control");
    }
}
