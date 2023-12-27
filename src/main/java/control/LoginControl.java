package control;

import dao.DAO;
import entity.User;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;

@WebServlet(name = "login", value = "/login")
public class LoginControl extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Cookie arr[] = request.getCookies();
        if(arr != null) {
            for(Cookie c : arr) {
                if(c.getName().equals("userC")){
                    request.setAttribute("username", c.getValue());
                }
                if(c.getName().equals("passC")){
                    request.setAttribute("password", c.getValue());
                }
            }
        }

        request.getRequestDispatcher("login.jsp").forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        String username = request.getParameter("user");
        String password = request.getParameter("password");
        String remember = request.getParameter("remember");
        DAO dao = new DAO();
        User u = dao.login(username, password);
        if(u == null){
            request.setAttribute("mess", "error");
            request.getRequestDispatcher("login.jsp").forward(request, response);
        } else {
            HttpSession session = request.getSession();
            session.setAttribute("user", u);
            session.setMaxInactiveInterval(5*60);

            Cookie userC = new Cookie("userC", username);
            Cookie passC = new Cookie("passC", password);
            userC.setMaxAge(60*60);
            if(remember != null){
                passC.setMaxAge(60*60);
            } else {
                passC.setMaxAge(0);
            }
            response.addCookie(userC);
            response.addCookie(passC);

            response.sendRedirect("home");
        }
    }

}
