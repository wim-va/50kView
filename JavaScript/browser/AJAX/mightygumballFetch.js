/*
 * get the content of a JSON file using Ajax 
 */

window.onload = getSalesWithFetch;

function getSalesWithFetch() {
    var url = "sales.json";  // ok als je file via webserver opvraagt (niet ok als je file opent in browser)
    fetch(url).then(function (response) {
        return response.json();
    }).then(function (responseAsJSON) {
        updateSales(responseAsJSON);
    });
}

function updateSales(responseAsJSON) {
    var salesDiv = document.getElementById("sales");
    var sales = responseAsJSON;
    for (var i = 0; i < sales.length; i++) {
        var sale = sales[i];
        var div = document.createElement("div");
        div.setAttribute("class", "saleItem");
        div.innerHTML = sale.name + " sold " + sale.sales + " gumballs";
        salesDiv.appendChild(div);
    }
}

