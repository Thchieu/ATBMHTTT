<%--
  Created by IntelliJ IDEA.
  User: acer
  Date: 01/01/2023
  Time: 15:37
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/plugins.css" />
    <link rel="stylesheet" href="css/main.css" />
    <link rel="shortcut icon" type="image/x-icon" href="image/favicon.ico">
    <title>Petmark ❤️</title>
</head>
<body class="">
<div class="site-wrapper">
    <jsp:include page="header/header.jsp"></jsp:include>
    <nav aria-label="breadcrumb" class="breadcrumb-wrapper">
        <div class="container">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="home">Trang chủ</a></li>
                <li class="breadcrumb-item active" aria-current="page">Đăng nhập</li>
            </ol>
        </div>
    </nav>
    <!--=============================================
    =            Login Register page content         =
    =============================================-->
    <main class="page-section pb--10 pt--50">
        <div class="container">
           
            <div class="row">
                <div class="alert alert-danger ${mess == null ? "sr-only":""}" role="alert">
                    Sai tên đăng nhập hoặc mật khẩu
                </div>
                <div class="col-sm-12 col-md-12 col-xs-12 col-lg-6 mb-30">
                    <!-- Login Form s-->
                    <form action="login" method="post">
                        <h4 class="login-title">Đăng nhập</h4>
                        <div class="login-form">
                            <div class="row">
                                <div class="col-md-12 col-12 mb--20">
                                    <label>Tên đăng nhâp</label>
                                    <input class="mb-0" type="text" name="user" value="${username}">
                                    <p id="error_email" style="color: red;"></p>
                                </div>
                                <div class="col-12 mb--20">
                                    <label>Mật Khẩu</label>
                                    <input class="mb-0" type="password" name="password" value="${password}" required>
                                </div>
                                <div class="col-md-12">
                                    <div class="d-flex align-items-center flex-wrap">
                                        <button class="btn btn-black me-3" type="submit">Đăng nhập</button>
                                        <div class="d-inline-flex align-items-center">
                                            <input type="checkbox" id="accept_terms" class="mb-0 me-1" value="1" name="remember">
                                            <label for="accept_terms" class="mb-0 font-weight-400">Lưu đăng nhâp</label>
                                        </div>
                                    </div>
                                    <p><a href="forgetpass" class="pass-lost mt-3">Quên mật khẩu?</a></p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-6 col-xs-12">
                    <h4 class="login-title">Đăng kí</h4>
                    <div class="login-form">
                        <div class="col-12 mb--20">
                            <p>Nếu bạn chưa có tài khoản hãy nhấn vào nút bên dưới để tạo cho mình một tài khoản riêng</p>
                        </div>
                        <div class="col-md-12">
                            <a href="signup.jsp" class="btn btn-black">Đăng kí tài khoản</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
<jsp:include page="footer/footer.jsp"></jsp:include>
<script src="js/plugins.js"></script>
<script src="js/ajax-mail.js"></script>
<script src="js/custom.js"></script>
</body>
</html>
