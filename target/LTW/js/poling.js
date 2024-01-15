function pollForDataChange() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var responseText = xhr.responseText;
            console.log(responseText);
            if (responseText === "false") {
                alert("Data has changed!");
            } else if (responseText === "error") {
                console.error("An error occurred while checking for data change.");
            }
            setTimeout(pollForDataChange, 10000);
        }
    };
    xhr.open("GET", "/ATBMHTTT_war/PollingServlet", true);
    xhr.send();
}
pollForDataChange();
