import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // 1. Importar el servicio HTTP dentro del archivo de servicios
import { Recetas } from './/recetas/recetas.component';

@Injectable({
  providedIn: 'root'
})
export class RecetasDataService {
  constructor(private http: HttpClient) { } // 2. Inyectar el servicio HTTPClient dentro de nuestro servicio

  // 5. Metodo publico para que el componente pueda llamarlo. 
  private apiBaseUrl = '/api/recetas';

  public getRecetas(): Promise<Recetas[]> {
    const url: string = `${this.apiBaseUrl}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Recetas[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error en la lectura de videos', error);
    return Promise.reject(error.message || error);
  }
}
