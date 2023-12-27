package admin;

import com.sun.mail.util.QDecoderStream;
import dao.DAO;
import entity.User;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;

@WebServlet(name = "edit", value = "/edit")
public class EditControl extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        String pID = request.getParameter("id");
        String pName = request.getParameter("name");
        String pImage = request.getParameter("image");
        String pPrice = request.getParameter("price");
        String pPriceDis = request.getParameter("priceDis");
        String pDes = request.getParameter("description");
        String pCategory = request.getParameter("category");

        DAO dao = new DAO();
        dao.updateProduct(pID, pName, pDes, pImage, pPrice, pPriceDis, pCategory);
        response.sendRedirect("product-control");
    }
}
