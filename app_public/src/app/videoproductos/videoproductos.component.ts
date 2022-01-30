import { Component, OnInit } from '@angular/core';
import { VideoproductosDataService } from '../videoproductos-data.service';

export class Videoproductos {
  imagen: string;
  nombre: string;
}

@Component({
  selector: 'app-videoproductos',
  templateUrl: './videoproductos.component.html',
  styleUrls: ['./videoproductos.component.css']
})

export class VideoproductosComponent implements OnInit {

  constructor(private videoproductosDataService: VideoproductosDataService) { } 

  public videoproductos: Videoproductos[];

  private getVideoproductos(): void {
    this.videoproductosDataService
      .getVideoproductos()
        .then(foundVideproductos => this.videoproductos = foundVideproductos);
  }

  ngOnInit(): void {    
    this.getVideoproductos();
  }

}
