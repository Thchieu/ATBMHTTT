<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Digital Signature Example</title>
</head>
<body>
<h2>Enter Invoice Information:</h2>
<form action="DigitalSignatureServlet" method="post">
  <textarea name="invoiceInfo" rows="4" cols="50"></textarea><br>
  <input type="submit" value="Generate Digital Signature">
</form>
</body>
</html>