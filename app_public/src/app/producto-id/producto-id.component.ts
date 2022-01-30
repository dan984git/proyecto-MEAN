import { Component, OnInit } from '@angular/core';
import { ProdIdDataService } from '../prod-id-data.service'; // a. Importar el servicio del archivo de servicios

export class ProductoId{
  nombre: string;
  codigo: string;
  semana: number;
  precioNormal: number;
  precioDescuento:number;
  descuento: number;
  capacidad: number;
  medida: string;
  stock: string;
}

@Component({
  selector: 'app-producto-id',
  templateUrl: './producto-id.component.html',
  styleUrls: ['./producto-id.component.css']
})
export class ProductoIdComponent implements OnInit {

  constructor(private prodIdDataService: ProdIdDataService) { } // b. Inyectar servicio en el componente usado por el constructor

  /*productoId : ProductoId = {
    nombre:"Cristalware",
    codigo:"test",
    semana:5,
    precioNormal:50,
    precioDescuento:25,
    descuento:50,
    capacidad:5,
    medida:"mL",
    stock:"No hay Stock"
  };*/

  public productoId: ProductoId;

  private getProdId(): void {
    this.prodIdDataService
      .getProdId()
        .then(foundProdId => this.productoId = foundProdId);
  }

  ngOnInit(): void {
    this.getProdId();
  }

}
