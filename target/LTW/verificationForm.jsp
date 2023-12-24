<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Signature Verification</title>
</head>
<body>
<h2>Signature Verification</h2>
<form action="/signatureVerificationController" method="get">
    <label>Data:</label>
    <input type="text" name="data" required><br>
    <label>Signature:</label>
    <input type="text" name="signature" required><br>
    <label>Public Key:</label>
    <input type="text" name="publicKey" required><br>
    <button type="submit">Verify Signature</button>
</form>
</body>
</html>