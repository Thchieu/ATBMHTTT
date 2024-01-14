<%--
  Created by IntelliJ IDEA.
  User: acer
  Date: 06/01/2023
  Time: 18:41
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
  <title>Petmark - Pet Care & Veterinary Bootstrap Template</title>
</head>
<body class="">
<div class="site-wrapper">
  <jsp:include page="header/header.jsp"></jsp:include>
  <nav aria-label="breadcrumb" class="breadcrumb-wrapper">
    <div class="container">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="hone">Trang chủ</a></li>
        <li class="breadcrumb-item active" aria-current="page">Giải đáp</li>
      </ol>
    </div>
  </nav>
  <!-- Main Wrapper Start -->
  <main id="content" class="main-content-wrapper overflow-hidden">
    <div class="faq-section">
      <div class="container">
        <header class="section-header">
          <h2>CÂU HỎI THƯỜNG GẶP</h2>
        </header>
        <article class="section-article">
          <h4>Dưới đây là những câu hỏi thường gặp, bạn có thể tìm thấy câu trả lời cho mình.</h4>
        </article>
        <!-- Site Faq -->
        <div class="site-faq-accordion accordion" id="accordionExample">
          <div class="card">
            <div class="card-header" id="headingThree">
              <h2 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree"
                        aria-expanded="false" aria-controls="collapseThree">
                  * Thuốc thú y là gì?
                </button>
              </h2>
            </div>
            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
              <div class="card-body">
                Về cơ bản, thuốc thú y được hiểu là đơn chất hoặc hỗn hợp các chất, bao gồm dược phẩm, vacxin, chế phẩm sinh học, vi sinh vật, hóa chất được phê duyệt dùng cho động vật. Thuốc thú y được sử dụng với mục đích phòng bệnh, chữa bệnh, chẩn đoán bệnh, điều chỉnh, phục hồi chức năng sinh trưởng, sinh sản của động vật nói chung và vật nuôi nó riêng.
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingFive">
              <h2 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive"
                        aria-expanded="false" aria-controls="collapseFive">
                  * Vai trò của thuốc thú y trong sản xuất và chăn nuôi?
                </button>
              </h2>
            </div>
            <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
              <div class="card-body">
                <p>+ Sản phẩm thuốc thú y có tác dụng phòng và chữa bệnh cho vật nuôi đảm bảo nguồn thực phẩm từ chăn nuôi có giá trị và chất lượng cao</p>
                <P>+ Thuốc thú y giúp vật nuôi tăng trưởng và phát triển ổn định.</P>
                <p>+ Nâng cao hiệu quả công tác phòng ngừa ngăn chặn dịch bệnh nhằm bảo vệ phát triển ngành chăn nuôi, cung cấp sản phẩm làm từ vật nuôi có chất lượng cao phục vụ cho tiêu dùng trong nước và xuất khẩu.</p>
                <p>+ Ngoài ra thuốc thú y có vai trò bảo vệ con người tránh được những bệnh lây nhiễm trực tiếp từ động vật và những bệnh do thức ăn làm từ động vật gây ra.</p>
                <p></p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingTwo">
              <h2 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                        aria-expanded="false" aria-controls="collapseTwo">
                  * Hướng dẫn mua hàng.
                </button>
              </h2>
            </div>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
              <div class="card-body">
                <p>Khách hàng có thể đặt mua hàng online qua các hình thức sau:</p>
                <p><strong> Cách 1:</strong> Trực tiếp tạo đơn hàng mua tại Website Công ty MEBIPHA và thực hiện theo hướng dẫn mua hàng online.</p>
                <p><strong> Cách 2:</strong> Liên hệ Salephone, Facebook trung tâm mua sắm MEBIPHA hoặc email để chốt thông tin đơn hàng: Tên hàng, số lượng, giá cả, thời gian giao hàng, phương thức thanh toán để làm căn cứ phát hành đơn hàng.</p>
                <p><strong> Cách 3:</strong> Liên hệ nhân viên kinh doanh qua số điện thoại Hotline để đặt mua hàng. Nội dung thông tin đơn hàng mua này sẽ được lưu lại tại tổng đài công ty làm căn cứ giao hàng. </p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingFour">
              <h2 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour"
                        aria-expanded="false" aria-controls="collapseFour">
                  * Quy trình, chính sách bảo hành, đổi trả?
                </button>
              </h2>
            </div>
            <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
              <div class="card-body">
                <strong>** Sản phẩm không bị lỗi kỹ thuật:<BR></strong>
                <p>Công ty sẽ không giải quyết việc trả hàng, đổi hàng cho Quý Khách hàng đối với những sản phẩm không phải do lỗi của Nhà sản xuất.</p>
                <strong>** Sản phẩm bị lỗi kỹ thuật:</strong>
                <p>– Sản phẩm bị lỗi kỹ thuật do bảo quản không đúng theo hướng dẫn ghi trên bao bì: công ty không chịu trách nhiệm, sau khi đã đối chiếu so sánh với sản phẩm cùng lô sản xuất lưu tại nhà máy.</p>
                <p><strong>– Quý Khách hàng nghi ngờ sản phẩm bị lỗi kỹ thuật</strong>, quy trình giải quyết sẽ theo trình tự như sau:</p>
                <P>+ Thông báo ngay cho Đại diện công ty: Tên Sản phẩm, Quy cách, Số lượng, Số lô (Ngày sản xuất, Hạn sử dụng).</P>
                <p> Mô tả tình trạng sản phẩm bị lỗi: Do bao bì (rách, ướt…) hoặc do chất lượng bên trong (xuống màu, đổi màu, kết tủa…)</p>
                <P> Chụp hình sản phẩm bị lỗi gửi qua Email hoặc Zalo trong vòng 24 giờ làm việc cho Sales Admin để xử lý nhanh chóng.</P>
                <p>+ Ngay khi tiếp nhận thông tin từ Quý Khách hàng, Sales Admin có trách nhiệm báo cáo chi tiết về cho Phòng QA để kiểm tra đối chiếu với mẫu thành phẩm lưu kho tại Nhà máy. Đồng thời đại diện công ty <strong>gửi sản phẩm mẫu (khoảng 2 – 3 đơn vị sản phẩm) </strong>về Nhà máy kiểm tra để có kết quả nhanh nhất.</p>
                <p>+ Trong vòng 3 ngày làm việc, bộ phận QA sẽ trả lời chính thức bằng văn bản:</p>
                <p><strong> Trường hợp 1: </strong>Sản phẩm không bị lỗi kỹ thuật (đặc tính sản phẩm, chất mang: màu sản phẩm không ảnh hưởng đến chất lượng sản phẩm).</p>
                <p><strong> Trường hợp 2:</strong> Sản phẩm bị lỗi bao bì trong quá trình vận chuyển, Công ty đổi sản phẩm mới cùng loại cho Quý Khách hàng. Xử lý không quá 30 ngày kể từ ngày nhận hàng.</p>
                <p><strong>Trường hợp 3:</strong>  Sản phẩm bị lỗi chất lượng bên trong, công ty đổi sản phẩm mới cùng loại cho Quý Khách hàng. Xử lý tối đa không quá 90 ngày kể từ ngày nhận hàng.</p>
                <p><STRONG>Lưu ý:</STRONG> Quý Khách hàng <strong> tự ý trả hàng về </strong>hoặc Nhân viên kinh doanh <strong> tự ý nhận hàng trả về</strong> mà không thực hiện đúng theo quy định Đổi / Trả hàng thì công ty không chịu trách nhiệm.</p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingSix">
              <h2 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix"
                        aria-expanded="false" aria-controls="collapseSix">
                  * Phương thức thanh toán
                </button>
              </h2>
            </div>
            <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
              <div class="card-body">
                <p><strong> Cách 1:</strong> Thanh toán chuyển khoản qua tài khoản CÔNG TY</p>
                <p><strong> Cách 2:</strong> Thanh toán bằng tiền mặt ngay khi nhận hàng </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>
<jsp:include page="footer/footer.jsp"></jsp:include>
<script src="js/plugins.js"></script>
<script src="js/ajax-mail.js"></script>
<script src="js/custom.js"></script>
</body>
</html>
