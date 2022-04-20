import { dataSerie } from './dataSeries.js';
var seriesTbody = document.getElementById('series');
var seasonsAvg = document.getElementById("total-credits");
renderCoursesInTable(dataSerie);
seasonsAvg.innerHTML = "".concat(getSeasonsAverage(dataSerie));
function renderCoursesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                           <td>").concat(serie.name, "</td>\n                           <td>").concat(serie.channel, "</td>\n                           <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getSeasonsAverage(series) {
    var seasonsAverage = 0;
    series.forEach(function (serie) { return seasonsAverage = seasonsAverage + serie.seasons / serie.id; });
    return seasonsAverage;
}
