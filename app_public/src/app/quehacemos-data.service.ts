import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // 1. Importar el servicio HTTP dentro del archivo de servicios
import { Calendario } from './que-hacemos/que-hacemos.component';

@Injectable({
  providedIn: 'root'
})
export class QuehacemosDataService {

  constructor(private http: HttpClient) { } // 2. Inyectar el servicio HTTPClient dentro de nuestro servicio

  // 5. Metodo publico para que el componente pueda llamarlo. 
  private apiBaseUrl = '/api/que-hacemos';

  public getCalendario(): Promise<Calendario[]> {
    const url: string = `${this.apiBaseUrl}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Calendario[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error en la lectura de calendario', error);
    return Promise.reject(error.message || error);
  }

}