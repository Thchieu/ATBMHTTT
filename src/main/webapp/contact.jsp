<%--
  Created by IntelliJ IDEA.
  User: acer
  Date: 06/01/2023
  Time: 18:42
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
        <li class="breadcrumb-item active" aria-current="page">Liên hệ</li>
      </ol>
    </div>
  </nav>
  <div class="gogle_map">
    <div id="googleMap">
    </div>
  </div>
  <section class="ct-feature-section">
    <div class="container">
      <div class="row justify-content-center text-center mb--20">
        <div class="col-lg-4 col-md-6 col-sm-8 col-12">
          <div class="ct-section-title-2">
            <h2 class="mb--15">LIÊN HỆ CHÚNG TÔI</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-sm-6 mt--30">
          <div class="ct-feature">
            <div class="icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <h3>Địa chỉ</h3>
            <p> Trường Đại học Nông Lâm TP.HCM<br>
              Khu Phố 6, phường Linh Trung, TP.Thủ Đức, TP.HCM </p>

          </div>
        </div>
        <div class="col-lg-3 col-sm-6 mt--30">
          <div class="ct-feature">
            <div class="icon">
              <i class="fas fa-phone"></i>
            </div>
            <h3>Điện Thoại</h3>
            <p>Số Điện thoại 1: +84123456789<br>
              Số Điện thoại 2: +84877458414</p>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6 mt--30">
          <div class="ct-feature">
            <div class="icon">
              <i class="fas fa-fax"></i>
            </div>
            <h3>HOTLINE</h3>
            <p>19001441<br>
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6 mt--30">
          <div class="ct-feature">
            <div class="icon">
              <i class="far fa-envelope"></i>
            </div>
            <h3>Địa chỉ Email</h3>
            <p>petmart123@gmail.com<br>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="contact-page-section section-padding bg-gray">

    <div class="container">
      <div class="ct-section-title-2 mb--60 text-center">
        <h2>GỬI YÊU CẦU ĐẾN PETMARK</h2>
      </div>
      <form action="" class="site-form contact-form-2" id="contact-form">
        <div class="row justify-content-center text-center">
          <div class="col-lg-6">
            <div class="form-group">
              <input type="text" name="firstName" id="firstName" class="form-control" placeholder="Họ *">
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group">
              <input type="text" name="lastName" id="lastName" class="form-control" placeholder="Tên*">
            </div>
          </div>
          <div class="col-lg-12">
            <div class="form-group">
              <input type="email" name="email" id="email" class="form-control" placeholder="Địa chỉ Email *">
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <textarea name="message" id="message" cols="30" rows="10" class="form-control" placeholder="Tin nhắn*"></textarea>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="submit-btn">
              <button type="submit" class="btn btn-black">Gửi</button>
            </div>
          </div>
          <div class="form-messege"></div>
        </div>
      </form>
    </div>

  </section>
</div>
<jsp:include page="footer/footer.jsp"></jsp:include>
<script src="js/plugins.js"></script>
<script src="js/ajax-mail.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBmGmeot5jcjdaJTvfCmQPfzeoG_pABeWo"></script>
<script>
  // When the window has finished loading create our google map below
  google.maps.event.addDomListener(window, 'load', init);
  function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
      // How zoomed in you want the map to start at (always required)
      zoom: 12,
      scrollwheel: false,
      // The latitude and longitude to center the map (always required)
      center: new google.maps.LatLng(10.87142389266563, 106.7917724298271), // NLU
      // How you would like to style the map.
      // This is where you would paste any style found on Snazzy Maps.
      styles: [{
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [{
          "saturation": 36
        },
          {
            "color": "#000000"
          },
          {
            "lightness": 40
          }
        ]
      },
        {
          "featureType": "all",
          "elementType": "labels.text.stroke",
          "stylers": [{
            "visibility": "on"
          },
            {
              "color": "#000000"
            },
            {
              "lightness": 16
            }
          ]
        },
        {
          "featureType": "all",
          "elementType": "labels.icon",
          "stylers": [{
            "visibility": "off"
          }]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#000000"
          },
            {
              "lightness": 20
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#000000"
          },
            {
              "lightness": 17
            },
            {
              "weight": 1.2
            }
          ]
        },
        {
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [{
            "color": "#000000"
          },
            {
              "lightness": 20
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [{
            "color": "#000000"
          },
            {
              "lightness": 21
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#000000"
          },
            {
              "lightness": 17
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#000000"
          },
            {
              "lightness": 29
            },
            {
              "weight": 0.2
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [{
            "color": "#000000"
          },
            {
              "lightness": 18
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "geometry",
          "stylers": [{
            "color": "#000000"
          },
            {
              "lightness": 16
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [{
            "color": "#000000"
          },
            {
              "lightness": 19
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{
            "color": "#000000"
          },
            {
              "lightness": 17
            }
          ]
        }
      ]
    };
    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('googleMap');
    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);
    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(10.87142389266563, 106.7917724298271),
      map: map,
      title: 'googlemap!',
      animation: google.maps.Animation.BOUNCE
    });
  }
</script>
<script src="js/custom.js"></script>
</body>
</html>
