package control;

import dao.DAO;
import entity.User;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;

@WebServlet(name = "changepass", value = "/changepass")
public class ChangePassControl extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession();
        Object o = session.getAttribute("user");
        if (o == null) {
            response.sendRedirect("login");
        } else {
            request.getRequestDispatcher("changepass.jsp").forward(request, response);
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        String username = request.getParameter("username");
        String oldPass = request.getParameter("old-pass");
        String newPass = request.getParameter("new-pass");
        String reNewPass = request.getParameter("re-newpass");

        DAO dao = new DAO();
        User u = dao.login(username, oldPass);

        if (u == null) {
            request.setAttribute("mess", "khong ton tai");
            request.getRequestDispatcher("changepass.jsp").forward(request, response);
        } else {
            if (newPass.equals(reNewPass)) {
                dao.changePass(username, newPass);
                User user = dao.login(username, newPass);
                HttpSession session = request.getSession();
                session.setAttribute("user", user);
                response.sendRedirect("home");
            } else {
                request.setAttribute("mess2", "nhap sai mk");
                request.getRequestDispatcher("changepass.jsp").forward(request, response);
            }
        }
    }
}
