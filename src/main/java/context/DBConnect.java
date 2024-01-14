package context;

import com.sun.tools.javac.Main;

import java.sql.*;

public class DBConnect {

    private static final String serverName = "localhost";
    private static final String dbName = "petmark";
    private static final String portNumber = "3306";
    private static final String instance="";//LEAVE THIS ONE EMPTY IF YOUR SQL IS A SINGLE INSTANCE
    private static final String userID = "root";
    private static final String password = "";


    public static Connection getConnection()throws Exception {
        String url = "jdbc:mysql://"+serverName+":"+portNumber + "/" + instance +dbName;
        if(instance == null || instance.trim().isEmpty())
            url = "jdbc:mysql://"+serverName+":"+portNumber +"/"+dbName;
        Class.forName("com.mysql.cj.jdbc.Driver");
        return DriverManager.getConnection(url, userID, password);
    }

    public static void main(String[] args) {
        try {
            System.out.println(new DBConnect().getConnection());
        } catch (Exception e){

        }
    }
}
