import { Component, OnInit } from '@angular/core';
import { RecetasDataService } from '../recetas-data.service';

export class Recetas {
  imagen: string;
  nombre: string;
}

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit {

  constructor(private recetasDataService: RecetasDataService) { } 

  public recetas: Recetas[];

  private getRecetas(): void {
    this.recetasDataService
      .getRecetas()
        .then(foundRecetas => this.recetas = foundRecetas);
  }

  ngOnInit(): void {    
    this.getRecetas();
  }

}
