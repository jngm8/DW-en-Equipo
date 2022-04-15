import { dataSeries } from './dataSeries.js';
var seriesTbody = document.getElementById('series');
renderCoursesInTable(dataSeries);
function renderCoursesInTable(series) {
    console.log('Desplegando cursos');
    series.forEach(function (series) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(series.id, "</td>\n                             <td>").concat(series.name, "</td>\n                             <td>").concat(series.channel, "</td>\n                             <td>").concat(series.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
