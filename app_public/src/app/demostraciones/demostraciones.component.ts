import { Component, OnInit } from '@angular/core';
import { DemostracionesDataService } from '../demostraciones-data.service';

export class Demostraciones {
  imagen: string;
  nombre: string;
}

@Component({
  selector: 'app-demostraciones',
  templateUrl: './demostraciones.component.html',
  styleUrls: ['./demostraciones.component.css']
})

export class DemostracionesComponent implements OnInit {

  constructor(private demostracionesDataService: DemostracionesDataService) { } 

  public demostraciones: Demostraciones[];

  private getDemostraciones(): void {
    this.demostracionesDataService
      .getDemostraciones()
        .then(foundDemostraciones => this.demostraciones = foundDemostraciones);
  }

  ngOnInit(): void {    
    this.getDemostraciones();
  }

}
