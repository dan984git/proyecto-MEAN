import { Component, OnInit } from '@angular/core';
import { QuehacemosDataService } from '../quehacemos-data.service'; // a. Importar el servicio del archivo de servicios

export class Calendario {
  dia: string;
  titulo: string;
  descripcion: string;
  link: string;
  mes: string;
}

@Component({
  selector: 'app-que-hacemos',
  templateUrl: './que-hacemos.component.html',
  styleUrls: ['./que-hacemos.component.css']
})
export class QueHacemosComponent implements OnInit {
  // b. Inyectar servicio en el componente usado por el constructor 
  constructor(private quehacemosDataService: QuehacemosDataService) { } 

  public calendario: Calendario[];

  private getCalendario(): void {
    this.quehacemosDataService
      .getCalendario()
        .then(foundCalendario => this.calendario = foundCalendario);
  }  

  ngOnInit(): void {
    this.getCalendario();
  }

}

