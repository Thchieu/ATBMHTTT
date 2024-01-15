<%--
  Created by IntelliJ IDEA.
  User: acer
  Date: 06/01/2023
  Time: 15:59
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/plugins.css" />
    <link rel="stylesheet" href="css/main.css" />
    <link rel="shortcut icon" type="image/x-icon" href="image/favicon.ico">
    <title>Petmark ❤</title>
</head>
<body class="">
<div class="site-wrapper">
    <jsp:include page="header/header.jsp"></jsp:include>
    <nav aria-label="breadcrumb" class="breadcrumb-wrapper">
        <div class="container">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="home">Trang chủ</a></li>
                <li class="breadcrumb-item active" aria-current="page">Tin tức</li>
            </ol>
        </div>
    </nav>
    <section class="blog-page-section with-sidebar">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-xl-9 order-lg-2  left-slide-margin">

                    <div class="blog-posts-container">
                        <!-- Blog Image Post -->
                        <c:forEach items="${listB}" var="b">
                            <div class="blog-post blog-style-list">
                                <div class="row">
                                    <div class="col-lg-5 col-md-6">
                                        <a href="blog-detail?bID=${b.id}" class="blog-image">
                                            <img src="${b.image}" alt="">
                                        </a>
                                    </div>
                                    <div class="col-lg-7 col-md-6">
                                        <div class="blog-content mt--15 mt-md-0">
                                            <header>
                                                <div class="post-category text-primary">
                                                    <i class="fas fa-folder"></i>
                                                    <a href="#">Thú cưng</a>,
                                                    <a href="#">Sức khỏe</a>
                                                </div>
                                                <h3 class="blog-title"> <a href="blog-detail?bID=${b.id}">${b.name}</a></h3>
                                                <div class="post-meta">
                                                        <span class="post-author">
                                                            <i class="fas fa-user"></i>
                                                            <span class="text-gray">Đăng bởi : </span>
                                                            ${b.poster}
                                                        </span>
                                                    <span class="post-separator">|</span>
                                                    <span class="post-date">
                                                            <i class="far fa-calendar-alt"></i>
                                                            <span class="text-gray">vào : </span>
                                                           ${b.date}
                                                        </span>
                                                </div>
                                            </header>
                                            <article>
                                                <h3 class="d-none sr-only">blog-article</h3>
                                                <p>${b.des}</p>
                                            </article>
                                            <footer class="blog-post-footer">
                                                <div class="blog-btn">
                                                    <a href="blog-details-left-sidebar.html" class="btn btn-rounded btn-outlined--primary">Đọc thêm</a>
                                                </div>
                                                <div class="social-links">
                                                    <a href="#" class="single-social social-rounded"><i class="fab fa-facebook-f"></i></a>
                                                    <a href="#" class="single-social social-rounded"><i class="fab fa-twitter"></i></a>
                                                    <a href="#" class="single-social social-rounded"><i class="fab fa-pinterest-p"></i></a>
                                                    <a href="#" class="single-social social-rounded"><i class="fab fa-google-plus-g"></i></a>
                                                    <a href="#" class="single-social social-rounded"><i class="fab fa-linkedin-in"></i></a>
                                                </div>
                                            </footer>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </c:forEach>
                    </div>
                </div>
                <div class="col-lg-4 col-xl-3 order-lg-1">
                    <div class="sidebar-widget">
                        <div class="single-sidebar">
                            <h2 class="sidebar-title">Tìm kiếm</h2>
                            <div class="site-mini-search">
                                <input type="text" placeholder="Tìm kiếm">
                                <button><i class="fas fa-search"></i></button>
                            </div>
                        </div>
                        <div class="single-sidebar">
                            <h2 class="sidebar-title"> Kho Lưu Trữ Blog</h2>
                            <ul class="sidebar-list">
                                <li><a href="#"> Tháng 3 2022 (1)</a></li>
                                <li><a href="#">Tháng 12 2021 (3)</a></li>
                                <li> <a href="#">Tháng 11 2021 (4)</a></li>
                                <li><a href="#">Tháng 9 2022 (1)</a></li>
                                <li><a href="#">Thnags 8 2012 (1)</a></li>
                            </ul>
                        </div>
                        <div class="single-sidebar">
                            <h2 class="sidebar-title">Bài Đăng gần đây</h2>
                            <ul class="sidebar-list">
                                <li><a href="#"> Vacxin cho thú cưng</a></li>
                                <li><a href="#">Hình ảnh về thú cưng</a></li>
                                <li> <a href="#">Loại thuốc mới cho thú</a></li>
                            </ul>
                        </div>
                        <div class="single-sidebar">
                            <a class="promo-image overflow-image">
                                <img src="image/product/slidebar-promo-product.jpg" alt="">
                            </a>
                        </div>
                        <div class="single-sidebar">
                            <h2 class="sidebar-title">TAGS</h2>
                            <ul class="sidebar-tag-list">
                                <li><a href="#">Thú cưng</a></li>
                                <li><a href="#">Thuốc thú y</a></li>
                                <li> <a href="#">Chó</a></li>
                                <li><a href="#">Mèo</a></li>
                                <li><a href="#">Chăm sóc</a></li>
                                <li><a href="#">Sức khỏe</a></li>
                                <li><a href="#">Cửa hàng</a></li>
                                <li><a href="#">Tin tức</a></li>
                                <li><a href="#">Vacxin</a></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
<jsp:include page="footer/footer.jsp"></jsp:include>
<script src="js/plugins.js"></script>
<script src="js/ajax-mail.js"></script>
<script src="js/custom.js"></script>
</body>
</html>
