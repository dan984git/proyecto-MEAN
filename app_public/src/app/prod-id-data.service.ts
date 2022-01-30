import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // 1. Importar el servicio HTTP dentro del archivo de servicios
import { ProductoId } from './producto-id/producto-id.component'; // 6. Importar la clase ProductoId en mi servicio

@Injectable({
  providedIn: 'root'
})

export class ProdIdDataService {

  constructor(private http: HttpClient) { } // 2. Inyectar el servicio HTTPClient dentro de nuestro servicio

  // 5. Metodo publico para que el componente pueda llamarlo. 
  private apiBaseUrl = '/api/bazar/id';

  public getProdId(): Promise<ProductoId> {
    const codigo: string = '5faf20742849351218814d48'; // ${req.body.codigoId}
    const url: string = `${this.apiBaseUrl}/${codigo}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as ProductoId)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error en la lectura de usuarios', error);
    return Promise.reject(error.message || error);
  }

}
