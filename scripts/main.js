import { dataSerie } from './dataSeries.js';
var seriesTbody = document.getElementById('series');
var seasonsAvg = document.getElementById("seasonAverage");
var infoSerie = document.getElementById("infolink");
renderSeriesInTable(dataSerie);
seasonsAvg.innerHTML = "".concat(getSeasonsAverage(dataSerie));
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.onclick = function () { return showInfo(serie); };
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                           <td>").concat(serie.name, "</td>\n                           <td>").concat(serie.channel, "</td>\n                           <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getSeasonsAverage(series) {
    var seasonsAverage = 0;
    series.forEach(function (serie) { return seasonsAverage = seasonsAverage + serie.seasons; });
    return (seasonsAverage / series.length);
}
if (infoSerie.firstChild != null) {
    infoSerie.removeChild(infoSerie.firstChild);
}
function showInfo(serie) {
    console.log(serie);
    var cardElement = document.createElement("div");
    cardElement.setAttribute("id", "description");
    cardElement.setAttribute("class", "card");
    cardElement.setAttribute("style", "width: 18rem;");
    cardElement.innerHTML = "<img src=\"".concat(serie.imagen, "\" class=\"card-img-top\" alt=\"imagen\">\n                                <div class=\"card-body\">\n                                <h5>").concat(serie.name, "</h5>\n                                <p class=\"card-text\">").concat(serie.description, "</p>\n                                <a href=\"url\">").concat(serie.fuente, "</a>\n                                </div>;");
    infoSerie.appendChild(cardElement);
}
function clearSeriesInTable() {
    while (seriesTbody.hasChildNodes()) {
        if (seriesTbody.firstChild != null) {
            seriesTbody.removeChild(seriesTbody.firstChild);
        }
    }
}
