import { Series } from './series.js';

import { dataSerie } from './dataSeries.js';


let seriesTbody: HTMLElement = document.getElementById('series')!;
const seasonsAvg: HTMLElement = document.getElementById("seasonAverage")!;

renderCoursesInTable(dataSerie);

seasonsAvg.innerHTML = `${getSeasonsAverage(dataSerie)}`


function renderCoursesInTable(series: Series[]): void {
  console.log('Desplegando series');
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.id}</td>
                           <td>${serie.name}</td>
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;
    seriesTbody.appendChild(trElement);
  });
}
 

function getSeasonsAverage(series: Series[]): number {
  let seasonsAverage: number = 0;
  series.forEach((serie) => seasonsAverage += serie.seasons);
  return (seasonsAverage/series.length);
}

