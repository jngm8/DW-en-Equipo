export class Series {
    id: number;
    name: string;
    channel: string;
    seasons: number;
    description: string;
    fuente: string;
    imagen: string;
    
  
    constructor(id: number, name: string, channel: string, seasons:number, description:string,fuente:string,imagen:string) {
      this.id = id;
      this.name = name;
      this.channel = channel;
      this.seasons = seasons;
      this.description = description;
      this.fuente = fuente;
      this.imagen = imagen;
    }
  }