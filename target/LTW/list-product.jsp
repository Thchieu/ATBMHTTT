<%@ page import="dao.DAO" %>
<%@ page import="java.util.List" %>
<%@ page import="entity.Product" %>
<%@ page import="entity.Price" %>
<%@ page import="java.util.ArrayList" %>
<%@ page import="java.text.NumberFormat" %>
<%@ page import="dao.CartDAO" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: acer
  Date: 31/12/2022
  Time: 18:13
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
    <!-- Modal -->
    <nav aria-label="breadcrumb" class="breadcrumb-wrapper">
        <div class="container">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="home">Trang chủ </a></li>
                <li class="breadcrumb-item active" aria-current="page">Cửa hàng</li>
            </ol>
        </div>
    </nav>
    <main class="section-padding shop-page-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-xl-9 order-lg-2 mb--40">
                    <div class="shop-toolbar mb--30">
                        <div class="row align-items-center">
                            <div class="col-5 col-md-3 col-xl-4">
                                <!-- Product View Mode -->
                                <div class="product-view-mode">
                                    <a href="#" class="sortting-btn" data-bs-target="list "><i class="fas fa-list"></i></a>
                                    <a href="#" class="sortting-btn  active" data-bs-target="grid"><i class="fas fa-th"></i></a>
                                </div>
                            </div>
                            <div class="col-12 col-md-9 col-xl-8 mt-3 mt-md-0  pe-md-0">
                                <div class="sorting-selection">
                                    <div class="row align-items-center ps-md-0 pe-md-0 g-0">
                                        <div class="col-sm-6 col-md-7 col-xl-8 d-flex align-items-center justify-content-md-end">

                                        </div>
                                        <div class="col-md-5 col-xl-4 col-sm-6 text-sm-end mt-sm-0 mt-3">
                                            <span>
                                                Hiển thị 1–20 trong 52 kết quả
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="shop-product-wrap grid with-pagination row border grid-four-column  me-0 ms-0 g-0" id="contentP">
                        <c:forEach items="${listP}" var="p">
                            <div class="modal fade modal-quick-view" id="quickModal${p.id}" tabindex="-1" role="dialog" aria-labelledby="quickModal"
                                 aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="pm-product-details">
                                            <button type="button" class="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close">
                                            </button>
                                            <div class="row">
                                                <!-- Blog Details Image Block -->
                                                <div class="col-md-6">
                                                    <div class="image-block">
                                                        <!-- Zoomable IMage -->
                                                        <img id="zoom_03" src="${p.image}"
                                                             data-zoom-image="${p.image}" alt=""/>

                                                        <!-- Product Gallery with Slick Slider -->
                                                        <div id="product-view-gallery" class="elevate-gallery">
                                                            <!-- Slick Single -->
                                                            <a href="#" class="gallary-item" data-image="${p.image}"
                                                               data-zoom-image="${p.image}">
                                                                <img src="${p.image}" alt=""/>
                                                            </a>
                                                            <!-- Slick Single -->
                                                            <a href="#" class="gallary-item" data-image="${p.image}"
                                                               data-zoom-image="${p.image}">
                                                                <img src="${p.image}" alt=""/>
                                                            </a>
                                                            <!-- Slick Single -->
                                                            <a href="#" class="gallary-item" data-image="${p.image}"
                                                               data-zoom-image="${p.image}">
                                                                <img src="${p.image}" alt=""/>
                                                            </a>
                                                            <!-- Slick Single -->
                                                            <a href="#" class="gallary-item" data-image="${p.image}"
                                                               data-zoom-image="${p.image}">
                                                                <img src="${p.image}" alt=""/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6 mt-4 mt-lg-0">
                                                    <div class="description-block">
                                                        <div class="header-block">
                                                            <h3>${p.name}</h3>
                                                        </div>
                                                        <!-- Price -->
                                                        <p class="price"><span class="old-price"></span>${n.price}  VND</p>
                                                        <!-- Rating Block -->
                                                        <div class="rating-block d-flex  mt--10 mb--15">
                                                            <p class="rating-text"><a href="#comment-form">Chi Tiết</a></p>
                                                        </div>
                                                        <!-- Blog Short Description -->
                                                        <div class="product-short-para">
                                                            <p>
                                                                ${p.des}
                                                            </p>
                                                        </div>
                                                        <div class="status">
                                                            <i class="fas fa-check-circle"></i>300 Trong kho
                                                        </div>
                                                        <!-- Amount and Thêm vào giỏ -->
                                                        <form action="https://htmldemo.net/petmark/petmark/" class="add-to-cart">
                                                            <div class="count-input-block">
                                                                <input type="number" class="form-control text-center" value="1">
                                                            </div>
                                                            <div class="btn-block">
                                                                <a href="cart?&id=${p.id}" class="btn btn-rounded btn-outlined--primary">Thêm vào giỏ</a>
                                                            </div>
                                                        </form>
                                                        <!-- Sharing Block 2 -->
                                                        <div class="share-block-2 mt--30">
                                                            <h4>Chia sẽ sản phẩm</h4>
                                                            <ul class="social-btns social-btns-3">
                                                                <li><a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a></li>
                                                                <li><a href="#" class="twitter"><i class="fab fa-twitter"></i></a></li>
                                                                <li><a href="#" class="google"><i class="fab fa-google-plus-g"></i></a></li>
                                                                <li><a href="#" class="pinterest"><i class="fab fa-pinterest-p"></i></a></li>
                                                                <li><a href="#" class="linkedin"><i class="fab fa-linkedin-in"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="pm-product">
                                    <a href="detail?pID=${p.id}" class="image">
                                        <img src="${p.image}" alt="">
                                    </a>
                                    <div class="hover-conents">
                                        <ul class="product-btns">
                                            <li><a href=""  ><i class="ion-ios-heart-outline"></i></a></li>
                                            <li><a href=""  ><i class="ion-ios-shuffle"></i></a></li>
                                            <li><a href="#" data-bs-toggle="modal" data-bs-target="#quickModal${p.id}"><i class="ion-ios-search"></i></a></li>
                                        </ul>
                                    </div>

                                    <div class="content">
                                        <h3 class="font-weight-500"><a href="detail?pID=${p.id}">${p.name}</a></h3>
                                        <div class="price text-red">
                                            <span>${p.price} VND</span>
                                        </div>
                                        <div class="btn-block grid-btn">
                                                <a href="cart?&id=${p.id}" class="btn btn-outlined btn-rounded btn-mid">Thêm vào giỏ</a>
                                        </div>
                                        <div class="card-list-content ">
                                            <div class="rating-widget mt--20">
                                                <a href="#" class="single-rating"><i class="fas fa-star"></i></a>
                                                <a href="#" class="single-rating"><i class="fas fa-star"></i></a>
                                                <a href="#" class="single-rating"><i class="fas fa-star"></i></a>
                                                <a href="#" class="single-rating"><i class="fas fa-star"></i></a>
                                                <a href="#" class="single-rating"><i class="far fa-star"></i></a>
                                            </div>
                                            <div class="btn-block d-flex">
                                                <a href="cart?id=${p.id}" class="btn btn-outlined btn-rounded btn-mid"  >Thêm vào giỏ</a>
                                                <div class="btn-options">
                                                    <a href=""><i class="ion-ios-heart-outline"></i>Thêm vào DS Mong Muốn</a>
                                                    <a href=""><i class="ion-ios-shuffle"></i>So sánh</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </c:forEach>
                    </div>
                    <div class="mt--30">
                        <div class="pagination-widget">
                            <div class="site-pagination">
                                <c:if test="${indexPage > 1}">
                                    <a href="list-product?index=${1}" class="single-pagination">|&lt;</a>
                                    <a href="list-product?index=${indexPage - 1}" class="single-pagination"><</a>
                                </c:if>
                                <c:forEach begin="1" end="${endP}" var="i">
                                    <a href="list-product?index=${i}" class="single-pagination ${indexPage == i?"active":""}">
                                            ${i}</a>
                                </c:forEach>
                                <c:if test="${indexPage < endP}">
                                    <a href="list-product?index=${indexPage + 1}" class="single-pagination">&gt;</a>
                                    <a href="list-product?index=${endP}" class="single-pagination">&gt;|</a>
                                </c:if>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-xl-3 order-lg-1">
                    <div class="sidebar-widget">
                        <div class="single-sidebar">
                            <h2 class="sidebar-title">DANH MỤC SẢN PHẨM</h2>
                            <ul class="sidebar-filter-list">
                                <c:forEach items="${listC}" var="c">
                                    <li class="${tag == c.cID ? "active":""}"><a href="category?cid=${c.cID}">${c.cName}</a></li>
                                </c:forEach>
                            </ul>
                        </div>
                        <div class="single-sidebar">
                            <h2 class="sidebar-title">lỌC THEO GIÁ</h2>
                            <div class="range-slider pt--10" style="padding-top: 0px !important;">
                                <div class="slider-price">
                                 <%
                                     DAO dao = new DAO();
                                     Price p1 = new Price(0,100000);
                                     Price p2 = new Price(100000,1000000);
                                     Price p3 = new Price(1000000,2000000);
                                     Price p4 = new Price(2000000,5000000);
                                     List<Price> listPrice = new ArrayList<>();
                                     listPrice.add(p1);
                                     listPrice.add(p2);
                                     listPrice.add(p3);
                                     listPrice.add(p4);

                                     NumberFormat n = NumberFormat.getInstance();
                                     n.setMinimumIntegerDigits(0);
                                     double giadau = 0, giacuoi = 0;
                                     List<Product> listP = dao.getProductByPrice(giadau, giacuoi);
                                 %>
                                    <ul class="sidebar-filter-list">
                                        <%for(Price price :listPrice){%>
                                            <li ><a href="FilterControl?giadau=<%=price.getGiadau()%>&giacuoi=<%=price.getGiacuoi()%>" style="font-size: 14px;"><%=n.format(price.getGiadau())%> VND - <%=n.format(price.getGiacuoi()) %>VND</a></li>
                                        <%}%>
                                    </ul>

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="single-sidebar">
                            <h2 class="sidebar-title">SẮP XẾP THEO</h2>
                            <div class="range-slider pt--10" style="padding-top: 0px !important;">
                                <div class="slider-price">

                                    <ul class="sidebar-filter-list">

                                        <li ><a href="SortAToZ?" style="font-size: 14px;">Tên A-Z</a></li>
                                        <li ><a href="SortZToA?" style="font-size: 14px;">Tên Z-A</a></li>
                                        <li ><a href="SortPriceMinToMax?" style="font-size: 14px;">Giá (Thấp đến Cao) </a></li>
                                        <li ><a href="SortPriceMaxToMin?" style="font-size: 14px;">Giá (Cao đến Thấp)</a></li>

                                    </ul>

                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="single-sidebar">
                            <h2 class="sidebar-title">TAGS</h2>
                            <ul class="sidebar-tag-list">
                                <c:forEach items="${listC}" var="c">
                                    <li class="${tag == c.cID ? "active":""}"><a href="category?cid=${c.cID}">${c.cName}</a></li>
                                </c:forEach>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
<jsp:include page="footer/footer.jsp"></jsp:include>
</div>
<script src="js/plugins.js"></script>
<script src="js/ajax-mail.js"></script>
<script src="js/custom.js"></script>
</body>
</html>
