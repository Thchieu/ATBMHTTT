<%@ page import="dao.DAO" %>
<%@ page import="java.util.ArrayList" %>
<%@ page import="entity.Product" %>
<%@ page import="dao.CartDAO" %>
<%@ page import="java.util.List" %>
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
						<li class="breadcrumb-item"><a href="index.html">Trang chủ</a></li>
						<li class="breadcrumb-item active" aria-current="page">Giỏ hàng</li>
					</ol>
				</div>
			</nav>
			<!-- Cart Page Start -->
			<div class="cart_area cart-area-padding sp-inner-page--top">
				<div class="container">
					<div class="page-section-title">
						<h1>Giỏ Hàng</h1>
					</div>
					<div class="row">
						<div class="col-12">
							<form action="#" class="">
								<!-- Cart Table -->
								<div class="cart-table table-responsive mb--40">
									<table class="table">
										<!-- Head Row -->
										<thead>
											<tr>
												<th class="pro-remove"></th>
												<th class="pro-thumbnail">Hình Ảnh</th>
												<th class="pro-title">Tên Sản Phẩm</th>
												<th class="pro-price">Giá</th>
												<th class="pro-quantity">Số Lượng</th>
												<th class="pro-subtotal">Tổng Tiền</th>
											</tr>
										</thead>
										<tbody>
											<!-- Product Row -->
											<%
												DAO dao = new DAO();
												List<Product> list = CartDAO.getGiohang();
												int count = 1;
												int total=0;
												for(Product p: list){
													total+=p.getPrice();
											%>
											<tr>
												<td class="pro-remove"><a href="DelectProduct?id=<%=p.getId()%>"><i class="far fa-trash-alt"></i></a></td>
												<td class="pro-thumbnail"><a href="#"><img src="<%= p.getImage()%>" alt="Product"></a></td>
												<td class="pro-title"><a href="#"><%= p.getName()%></a></td>
												<td class="pro-price"><span><%= p.getPrice()%></span></td>
												<td class="pro-quantity">
													<div class="pro-qty">
														<div class="count-input-block">
															<input type="text" class="form-control text-center" value="<%= count%>">
														</div>
													</div>
												</td>
												<td class="pro-subtotal"><span><%=p.getPrice()%></span></td>
											</tr>
											<!-- Product Row -->
<%}%>
											<tr>
												<td colspan="6" class="actions">
													<div class="coupon-block">
														<div class="coupon-text">
															<label for="coupon_code">Mã giảm giá:</label>
															<input type="text" name="coupon_code" class="input-text" id="coupon_code" value="" placeholder="Mã giảm giá">
														</div>
														<div class="coupon-btn">
															<input type="submit" class="btn-black" name="apply_coupon" value="Áp dụng mã">
														</div>
													</div>
													<div class="cart-summary-button">
														<a href="list-product" class="checkout-btn c-btn" style="background: black;color: white;width: 160px;height: 37px;font-size: 20px;"> Tiếp tục mua</a>

													</div>
												</td>
											</tr>
											
										</tbody>
									</table>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div class="cart-section-2 sp-inner-page--bottom">
				<div class="container">
					<div class="row">
						<div class="col-lg-6 col-12 mb--15">
							<!-- slide Block 5 / Normal Slider -->
							<div class="cart-block-title">
								<h2>Có thể bạn quan tâm</h2>
							</div>
							<div class="petmark-slick-slider border normal-slider arrow-type-two" data-slick-setting='{
								"autoplay": true,
								"autoplaySpeed": 3000,
								"slidesToShow": 3,
								"arrows": true
								}'
								data-slick-responsive='[
								{"breakpoint":991, "settings": {"slidesToShow": 2} },
								{"breakpoint":768, "settings": {"slidesToShow": 1} }
								]'>
								<%for (Product p : dao.getAllProduct()){
									if(p.getCateID().equals("3")){
								%>
								<div class="single-slide">
                                            <div class="pm-product">
                                                <div class="image">
                                                    <a href="product-details.html"><img
                                                    src="<%=p.getImage()%>" alt=""></a>
                                                    <span class="onsale-badge">Sale!</span>
                                                </div>
                                                <div class="content">
                                                    <h3> <a href="product-details.html"> <%=p.getName()%></a></h3>
                                                    <div class="price text-orange">
                                                        <span class=""><%=p.getPrice()%> VND</span>

                                                    </div>
                                                    <div class="btn-block">
														<a href="cart-cart?&id=<%=p.getId()%>" class="btn btn-outlined btn-rounded btn-mid">Thêm vào giỏ</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
								<%}}%>
							</div>
								</div>
						<!-- Cart Summary -->
						<div class="col-lg-6 col-12 d-flex">
							<div class="cart-summary">
								<div class="cart-summary-wrap">
									<h4><span>Tóm tắt</span></h4>
									<p>Tổng phụ <span class="text-primary"><%=total%> VND</span></p>
									<p>Phí vận chuyển <span class="text-primary"><% int total1=0;if( total >0){total1 =35000;}else {total1=0;}%><%=total1%></span></p>
									<h2>Tổng tiền <span class="text-primary"><%=total + total1%> VND</span></h2>
								</div>
								<div class="cart-summary-button">
									<a href="checkout.jsp" class="checkout-btn c-btn">Thanh toán</a>
									<button class="update-btn c-btn">Cập nhật giỏ</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- Cart Page End -->
			<jsp:include page="footer/footer.jsp"></jsp:include>
	</div>
		<script>
			var isLoggedIn = <%= session.getAttribute("user") != null %>;
			function pollForDataChange() {
				if (isLoggedIn) {
					var xhr = new XMLHttpRequest();
					xhr.onreadystatechange = function () {
						if (xhr.readyState === 4 && xhr.status === 200) {
							var responseText = xhr.responseText;
							console.log(responseText);
							if (responseText === "false") {
								alert("Dữ liệu hóa đơn của bạn đã bị thay đổi");
							} else if (responseText === "error") {
								console.error("An error occurred while checking for data change.");
							}
							setTimeout(pollForDataChange, 10000);
						}
					};
					xhr.open("GET", "/ATBMHTTT_war/PollingServlet", true);
					xhr.send();
				} else {
					// User is not logged in, you may want to handle this case accordingly
					console.log("User is not logged in. Polling aborted.");
				}
			}

			// Run the function when the page is loaded
			pollForDataChange();

		</script>
	<script src="js/plugins.js"></script>
	<script src="js/ajax-mail.js"></script>
	<script src="js/custom.js"></script>
</body>
</html>
