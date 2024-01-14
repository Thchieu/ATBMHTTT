package control;

import dao.DAO;
import entity.User;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;

@WebServlet(name = "KeyManagementServlet", value = "/KeyManagementServlet")
public class KeyManagementServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
          response.setCharacterEncoding("UTF-8");
        String action = request.getParameter("action");
        HttpSession session = request.getSession();
        Object o = session.getAttribute("user");
        User user = (User) o;
        int uId = Integer.parseInt(user.getId());
        DAO dao = new DAO();
        boolean keyExists = dao.checkKey(uId);
        session.setAttribute("keyExists", keyExists);
        if (user != null) {
            if ("revokeKey".equals(action)) {
                if (keyExists) {
                    dao.removeAuthKey(uId);
                    response.getWriter().write("Yêu cầu hủy key của bạn đã được xử lý");
                } else {
                    response.getWriter().write("Yêu cầu hủy key của bạn không thành công");
                }

            } else if ("generateNewKey".equals(action)) {
                if(!keyExists){
                    dao.create_key();
                    response.getWriter().write("Yêu cầu tạo key mới của bạn đã được xử lý");
                } else {
                    response.getWriter().write("Yêu cầu tạo key mới của bạn không thành công");
                }


            } else {
                // Xử lý các trường hợp khác nếu cần
                response.getWriter().write("Hành động không hợp lệ");
            }
        } else {
            response.sendRedirect("login");
        }
    }
}
