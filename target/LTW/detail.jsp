<%@ page import="dao.DAO" %>
<%@ page import="entity.Product" %>
<%@ page import="dao.CartDAO" %>
<%@ page import="java.util.List" %><%--
  Created by IntelliJ IDEA.
  User: acer
  Date: 31/12/2022
  Time: 19:03
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
  DAO dao = new DAO();
  List<Product> list = CartDAO.getGiohang();
  %>
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
<body class="elevet-enable">
<div class="site-wrapper">
 <jsp:include page="header/header.jsp"></jsp:include>
  <nav aria-label="breadcrumb" class="breadcrumb-wrapper">
    <div class="container">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="home">Trang chủ</a></li>
        <li class="breadcrumb-item active" aria-current="page">Chi tiết sản phẩm</li>
      </ol>
    </div>
  </nav>
  <!-- Product Details Block -->
  <main class="product-details-section">
    <div class="container">
      <div class="pm-product-details">
        <div class="row">
          <!-- Blog Details Image Block -->
          <div class="col-md-6">
            <div class="image-block">
              <!-- Zoomable IMage -->
              <img id="zoom_03" src="${detail.image}" data-zoom-image="${detail.image}" alt=""/>
              <!-- Product Gallery with Slick Slider -->
              <div id="product-view-gallery" class="elevate-gallery">
                <!-- Slick Single -->
                <a href="#" class="gallary-item" data-image="${detail.image}"
                   data-zoom-image="${detail.image}">
                  <img src="${detail.image}" alt=""/>
                </a>
                <c:forEach items="${listI}" var="i">
                <a href="#" class="gallary-item" data-image="${i}"
                   data-zoom-image="${i}">
                  <img src="${i}" alt=""/>
                </a>
                </c:forEach>
              </div>
            </div>
          </div>
          <div class="col-md-6 mt-5 mt-md-0">
            <div class="description-block">
              <div class="header-block">
                <h3>${detail.name}</h3>
                <div class="navigation">
                  <a href="#"><i class="ion-ios-arrow-back"></i></a>
                  <a href="#"><i class="ion-ios-arrow-forward"></i></a>
                </div>
              </div>
              <!-- Rating Block -->
              <div class="rating-block d-flex  mt--10 mb--15">
                <div class="rating-widget">
                  <a href="#" class="single-rating"><i class="fas fa-star"></i></a>
                  <a href="#" class="single-rating"><i class="fas fa-star"></i></a>
                  <a href="#" class="single-rating"><i class="fas fa-star"></i></a>
                  <a href="#" class="single-rating"><i class="fas fa-star-half-alt"></i></a>
                  <a href="#" class="single-rating"><i class="far fa-star"></i></a>
                </div>
                <p class="rating-text"><a href="#comment-form">(đánh giá sản phẩm)</a></p>
              </div>
              <!-- Price -->
              <p class="price"><span class="old-price"></span>${detail.price} VND</p>
              <!-- Blog Short Description -->
              <div class="product-short-para">
                <p>
                  ${detail.des}
                </p>
              </div>
              <div class="status">
                <i class="fas fa-check-circle"></i>300 trong kho
              </div>
              <!-- Amount and Add to cart -->

                <div class="count-input-block">
                  <input type="text" class="form-control text-center" name="f" value="1">
                </div>
                <div class="btn-block grid-btn" style="margin-left: 19%;margin-top: -39px;margin-bottom: 5%;">

                  <a href="cart?id=${detail.id}&cartID=<%=System.currentTimeMillis()%>" class="btn btn-rounded btn-outlined--primary" style="width: 164px;height: 40px;">Thêm vào giỏ</a>
                </div>

              <!-- Wishlist  -->
              <div class="btn-options">
                <a href="wishlist.html"><i class="ion-ios-heart-outline"></i>Thêm vào danh sách mong muốn</a>
              </div>
              <!-- Products Tag & Category Meta -->
              <div class="product-meta mt--30">
                <p>Danh mục:
                  <c:forEach items="${listCate}" var="c">
                    <a href="category?cid=${c.cID}" class="single-meta">${c.cName}</a>
                  </c:forEach>
                </p>
              </div>
              <!-- Share Block 1 -->
              <div class="share-block-1">
                <ul class="social-btns">
                  <li><a href="#" class="facebook"><i class="far fa-thumbs-up"></i><span>Thích 1</span></a></li>
                  <li><a href="#" class="twitter"><i class="fab fa-twitter"></i> <span>twitter</span></a></li>
                  <li><a href="#" class="google"><i class="fas fa-plus-square"></i> <span>Chia sẻ</span></a></li>
                </ul>
              </div>
              <!-- Sharing Block 2 -->
              <div class="share-block-2  mt--30">
                <h4>Chia sẻ sản phẩm</h4>
                <ul class="social-btns social-btns-2">
                  <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
                  <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                  <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="review-section pt--60">
      <h2 class="sr-only d-none">Xem Sản Phẩm</h2>
      <div class="container">
        <div class="product-details-tab">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Mô tả sản phẩm</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Đánh giá </a>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
              <article>
                <h2 class="d-none sr-only"></h2>
                <p>
                  ${detail.des}
                </p>
              </article>
            </div>
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <div class="review-wrapper">
                <h2 class="title-lg mb--20">Đánh giá từ khách hàng</h2>
                <div class="review-comment mb--20">
                  <div class="avatar">
                    <img src="image/icon-logo/author-logo.png" alt="">
                  </div>
                  <div class="text">
                    <div class="rating-widget mb--15">
                      <span class="single-rating"><i class="fas fa-star"></i></span>
                      <span class="single-rating"><i class="fas fa-star"></i></span>
                      <span class="single-rating"><i class="fas fa-star"></i></span>
                      <span class="single-rating"><i class="fas fa-star-half-alt"></i></span>
                      <span class="single-rating"><i class="far fa-star"></i></span>
                    </div>
                    <h6 class="author">ADMIN –  <span class="font-weight-400">6/11/2022</span> </h6>
                    <p>sản phẩm rất tốt</p>
                  </div>
                </div>
                <h2 class="title-lg mb--20 pt--15">Thêm đánh giá</h2>
                <div class="rating-row pt-2">
                  <p class="d-block">Đánh giá của bạn</p>
                  <span class="rating-widget-block">
											<input type="radio" name="star" id="star1">
											<label for="star1"></label>
											<input type="radio" name="star" id="star2">
											<label for="star2"></label>
											<input type="radio" name="star" id="star3">
											<label for="star3"></label>
											<input type="radio" name="star" id="star4">
											<label for="star4"></label>
											<input type="radio" name="star" id="star5">
											<label for="star5"></label>
										</span>
                  <form action="https://htmldemo.net/petmark/petmark/" class="mt--15 site-form ">
                    <div class="row">
                      <div class="col-12">
                        <div class="form-group">
                          <label for="message">Bình luận</label>
                          <textarea name="message" id="message" cols="30" rows="10" class="form-control"></textarea>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="form-group">
                          <label for="name">Tên *</label>
                          <input type="text" id="name" class="form-control">
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="form-group">
                          <label for="email">Email *</label>
                          <input type="text" id="email" class="form-control">
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="form-group">
                          <label for="website">Website</label>
                          <input type="text" id="website" class="form-control">
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="submit-btn">
                          <a href="#" class="btn btn-black"> Đăng bình luận</a>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <!-- Slider bLock 4 -->
      <div class="pt--60">
        <div class="container">
          <div class="block-title">
            <h2>SẢN PHẨM LIÊN QUAN</h2>
          </div>
          <div class="petmark-slick-slider border normal-slider" data-slick-setting='{
							"autoplay": true,
							"autoplaySpeed": 3000,
							"slidesToShow": 5,
							"arrows": true
							}'
               data-slick-responsive='[
							{"breakpoint":991, "settings": {"slidesToShow": 3} },
							{"breakpoint":480, "settings": {"slidesToShow": 1,"rows" :1} }
							]'>
              <c:forEach items="${listP}" var="p">
                <div class="single-slide">
                  <div class="pm-product">
                    <div class="image">
                      <a href="detail?pID=${p.id}"><img
                              src="${p.image}" alt=""></a>
                      <span class="onsale-badge">Sale!</span>
                    </div>
                    <div class="content">
                      <h3> <a href="detail?pID=${p.id}">${p.image}</a></h3>
                      <div class="price text-orange">
                        <span class="old"></span>
                        <span>${p.price} VND</span>
                      </div>
                      <div class="btn-block">
                        <a href="cart?id=${p.id}" class="btn btn-outlined btn-rounded">Thêm vào giỏ</a>
                      </div>
                    </div>
                  </div>
                </div>
              </c:forEach>
          </div>
        </div>
      </div>
    </section>
  </main>
    <jsp:include page="footer/footer.jsp"></jsp:include>
</div>
<script src="js/plugins.js"></script>
<script src="js/ajax-mail.js"></script>
<script src="js/custom.js"></script>
</body>
</html>
