<%--
  Created by IntelliJ IDEA.
  User: acer
  Date: 01/01/2023
  Time: 15:38
  To change this template use File | Settings | File Templates.
--%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
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
<body class="petmark-theme-2">
<div class="site-wrapper">
  <jsp:include page="header/header.jsp"></jsp:include>
  <nav aria-label="breadcrumb" class="breadcrumb-wrapper">
    <nav aria-label="breadcrumb" class="breadcrumb-wrapper">
      <div class="container">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="home">Trang chủ</a></li>
          <li class="breadcrumb-item active" aria-current="page">Đổi mật khẩu</li>
        </ol>
      </div>
    </nav>
  </nav>
  <div class="container">
    <header class="entry-header">
      <h1 class="entry-title"></h1>
    </header>
    <div class="row">
      <form action="changepass" method="post">
        <div class="alert alert-danger ${mess2 == null ? "sr-only":""}" role="alert">
          Nhập lại mật khẩu sai
        </div>
        <div class="alert alert-danger ${mess == null ? "sr-only":""}" role="alert">
          Mật khẩu cũ sai
        </div>
        <h4 class="login-title" style="text-align: center">Đổi mật khẩu</h4>
        <div class="login-form">
          <div class="row"></div>
          <input type="hidden" name="username" value="${sessionScope.user.username}">
          <div class="col-12 mb--20">
            <label>Mật khẩu Cũ*</label>
            <input class="mb-0" type="password" name="old-pass">
          </div>
            <div class="col-12 mb--20">
              <label>Mật khẩu Mới*</label>
              <input class="mb-0" type="password" name="new-pass">
            </div>
            <div class="col-12 mb--20">
              <label>Nhập Lại Mật khẩu*</label>
              <input class="mb-0" type="password" name="re-newpass">
            </div>
            <div class="col-md-12" style="text-align: center">
              <button class="btn btn-black" type="submit">Đổi mật khẩu</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
  <jsp:include page="footer/footer.jsp"></jsp:include>
  <script src="js/plugins.js"></script>
  <script src="js/ajax-mail.js"></script>
  <script src="js/custom.js"></script>
</body>
</html>
