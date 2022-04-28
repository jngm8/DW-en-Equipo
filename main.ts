import { Series } from './series.js';

import { dataSerie } from './dataSeries.js';


let seriesTbody: HTMLElement = document.getElementById('series')!;
const seasonsAvg: HTMLElement = document.getElementById("seasonAverage")!;
let infoSerie: HTMLElement = document.getElementById("infolink")!;

renderSeriesInTable(dataSerie);

seasonsAvg.innerHTML = `${getSeasonsAverage(dataSerie)}`


function renderSeriesInTable(series: Series[]): void {
  console.log('Desplegando series');
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.onclick = () => showInfo(serie);
    trElement.innerHTML = `<td>${serie.id}</td>
                           <td>${serie.name}</td>
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;
    seriesTbody.appendChild(trElement);
  });
}
 

function getSeasonsAverage(series: Series[]): number {
  let seasonsAverage: number = 0;
  series.forEach((serie) => seasonsAverage = seasonsAverage + serie.seasons);
  return (seasonsAverage/series.length);
}

if (infoSerie.firstChild != null){
  infoSerie.removeChild(infoSerie.firstChild);
}

function showInfo(serie:Series) 
{ 
  console.log(serie);
  
  let cardElement = document.createElement("div");
    cardElement.setAttribute("id", "description");
    cardElement.setAttribute("class","card");
    cardElement.setAttribute("style","width: 18rem;");
    cardElement.innerHTML = `<img src="${serie.imagen}" class="card-img-top" alt="imagen">
                                <div class="card-body">
                                <h5>${serie.name}</h5>
                                <p class="card-text">${serie.description}</p>
                                <a href="url">${serie.fuente}</a>
                                </div>;`
    infoSerie.appendChild(cardElement);
}

function clearSeriesInTable() {
  while (seriesTbody.hasChildNodes()) {
    if (seriesTbody.firstChild != null) {
      seriesTbody.removeChild(seriesTbody.firstChild);
     
    }
  }
}

