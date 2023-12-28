<%--
  Created by IntelliJ IDEA.
  User: acer
  Date: 06/01/2023
  Time: 16:45
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
    <title>Petmark ❤️</title>
</head>
<body class="">
<div class="site-wrapper">
    <jsp:include page="header/header.jsp"></jsp:include>
    <nav aria-label="breadcrumb" class="breadcrumb-wrapper">
        <div class="container">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="home">Trang chủ</a></li>
                <li class="breadcrumb-item active" aria-current="page">Chi tiết tin tức</li>
            </ol>
        </div>
    </nav>
    <section class="blog-page-section with-sidebar">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-xl-9 mb--60 order-lg-2  left-slide-margin">
                    <div class="blog-post post-details single-block">
                        <a href="#" class="blog-image">
                            <img src="${blog.blogImage}" alt="">
                        </a>
                        <div class="blog-content mt--30">
                            <header>
                                <div class="post-category text-primary">
                                    <i class="fas fa-folder"></i>
                                    <a href="#">Thú cưng</a>,
                                    <a href="#">Sức khỏe</a>
                                </div>
                                <h3 class="blog-title"> <a href="blog-details.html">Nội dung của Blog </a></h3>
                                <div class="post-meta">
											<span class="post-author">
												<i class="fas fa-user"></i>
												<span class="text-gray">Đăng bởi: </span>
												${blog.poster}
											</span>
                                    <span class="post-separator">|</span>
                                    <span class="post-date">
												<i class="far fa-calendar-alt"></i>
												<span class="text-gray">Vào: </span>
												${blog.date}
											</span>
                                </div>
                            </header>
                            <article>
                                <h3 class="d-none sr-only">blob-article</h3>
                                <p class="p-0">${blog.des}</p>
                                <blockquote>
                                    <p>${blog.content}</p>
                                </blockquote>

                            </article>
                            <footer class="blog-meta">
                                <div> <a href="#">3 bình luận </a>/ TAGS: <a href="#">Thú cưng</a>, <a href="#">Chó</a>, <a href="#">Chăm sóc</a></div>
                            </footer>
                        </div>
                    </div>
                    <div class="share-block single-block">
                        <h3>Chia sẻ ngay</h3>
                        <div class="social-links  justify-content-center  mt--10">
                            <a href="#" class="single-social social-rounded"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="single-social social-rounded"><i class="fab fa-twitter"></i></a>
                            <a href="#" class="single-social social-rounded"><i class="fab fa-pinterest-p"></i></a>
                            <a href="#" class="single-social social-rounded"><i class="fab fa-google-plus-g"></i></a>
                            <a href="#" class="single-social social-rounded"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div class="related-post-block single-block">
                        <h3>Bài viết liên quan</h3>
                        <div class="row">
                            <c:forEach items="${listB}" var="b">
                                <div class="col-md-4 mt--30">
                                    <div class="related-post">
                                        <div class="image">
                                            <img src="${b.blogImage}" alt="">
                                        </div>
                                        <div class="content">
                                            <h4 class="post-date">12/06/2022</h4>
                                            <h2 class="post-title"><a href="blog-detail?bID=${b.id}">${b.name}</a></h2>
                                        </div>
                                    </div>
                                </div>
                            </c:forEach>
                        </div>
                    </div>
                    <div class="comment-block-wrapper single-block">
                        <h3>3 bình luận</h3>
                        <div class="single-comment">
                            <div class="comment-avatar">
                                <img src="image/icon-logo/author-logo.png" alt="">
                            </div>
                            <div class="comment-text">
                                <h5 class="author"> <a href="#">Author</a></h5>
                                <span class="time">08/10/2022 vào lúc 12:38 pm</span>
                                <p>Bổ X</p>
                            </div>
                            <a href="#" class="btn btn-outlined--primary btn-rounded reply-btn">Trả lời</a>
                        </div>
                        <div class="single-comment">
                            <div class="comment-avatar">
                                <img src="image/icon-logo/author-logo.png" alt="">
                            </div>
                            <div class="comment-text">
                                <h5 class="author"> <a href="#">Jack</a></h5>
                                <span class="time">19/07/2022 vào lúc 3:00 am</span>
                                <p>Cập nhật hàng ngày đi ad</p>
                            </div>
                            <a href="#" class="btn btn-outlined--primary btn-rounded reply-btn">Trả lời</a>
                        </div>
                        <div class="single-comment">
                            <div class="comment-avatar">
                                <img src="image/icon-logo/author-logo.png" alt="">
                            </div>
                            <div class="comment-text">
                                <h5 class="author"> <a href="#">Dexter</a></h5>
                                <span class="time">31/08/2022 vào lúc 3:30 am</span>
                                <p>+1 tin tức</p>
                            </div>
                            <a href="#" class="btn btn-outlined--primary btn-rounded reply-btn">Trả lời</a>
                        </div>
                    </div>
                    <div class="replay-form-wrapper single-block">
                        <h3 class="mt-0">Để lại ý kiến</h3>
                        <p>Địa chỉ email của bạn sẽ không được công bố. Các phần bắt buộc sẽ được đánh dấu *</p>
                        <form action="#" class="blog-form">
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <label for="message">Nội dung</label>
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
                                        <a href="#" class="btn btn-black">Bình luận</a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-lg-4 col-xl-3 order-lg-1">
                    <div class="sidebar-widget">
                        <div class="single-sidebar">
                            <h2 class="sidebar-title">Tìm kiếm</h2>
                            <div class="site-mini-search">
                                <input type="text" placeholder="Tìm Kiếm">
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
                                <li><a href="#">Tháng 8 2022 (1)</a></li>
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
                            <h2 class="sidebar-title">TAGS</h2>
                            <ul class="sidebar-tag-list">
                                <li><a href="#">Thú cưng</a></li>
                                <li><a href="#">Thuốc thú y</a></li>
                                <li> <a href="#">Chó</a></li>
                                <li><a href="#">Mèo</a></li>
                                <li><a href="#">Chăm sóc</a></li>
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
