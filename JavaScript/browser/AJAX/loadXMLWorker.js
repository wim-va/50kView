onmessage = function (e) {
   // console.log("worker started for " + e.data);
    loadXML(e.data, function (xhr) {
        postMessage({responseXML: xhr.responseText, responseType: xhr.responseType});   // responseXML is not available in workers!!!
    });


    //simple XHR request in pure raw JavaScript
    function loadXML(url, callback) {
        var xhttp;
        if (typeof XMLHttpRequest !== 'undefined') {
            xhttp = new XMLHttpRequest();
        }
        else {
            xhttp = new ActiveXObject("Msxml2.XMLHTTP");
        }

        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                callback(this);
            }
        }

        xhttp.open('GET', url, true);
        try { xhttp.responseType = "msxml-document" } catch (err) { } // Helping IE11
        xhttp.send();
    }
}