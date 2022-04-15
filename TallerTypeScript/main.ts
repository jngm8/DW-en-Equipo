import { Series } from './series.js';

import { dataSeries } from './dataSeries.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;

renderCoursesInTable(dataSeries);


function renderCoursesInTable(series: Series[]): void {
    console.log('Desplegando cursos');
    series.forEach((series) => {
      let trElement = document.createElement("tr");
      trElement.innerHTML = `<td>${series.id}</td>
                             <td>${series.name}</td>
                             <td>${series.channel}</td>
                             <td>${series.seasons}</td>`;
      seriesTbody.appendChild(trElement);
    });
  }