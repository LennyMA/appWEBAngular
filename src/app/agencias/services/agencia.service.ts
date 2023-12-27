import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agency } from '../models/agencia.model';

@Injectable({
  providedIn: 'root'
})
export class AgenciaService {

  //necesito una url especifica para este modulo 
  //ingresamos la url tal como esta en el servicio

  url = '/api/agencias/'

  //en el constructor necesito hacer referencia a la variable http, declaramos un parametro de tipo HttpClient
  constructor(private http: HttpClient) { }

  //creamos los metodos para el servidor: cargar agencias, cargar una agencia, agregar, actualiza y eliminar una agencia

  loadAgencies(): Observable<any> {
    return this.http.get(this.url)
  }


  loadAgency(id: string): Observable<any> {
    return this.http.get(this.url + id)
  }

  addAgency(agencia: Agency): Observable<any> {
    //necesitamos el url y lo que se va a guardar, es deci, la variable agencia
    return this.http.post(this.url, agencia)
  }

  updateAgency(id: string, agencia: Agency): Observable<any> {
    return this.http.put(this.url + id, agencia)
  }

  deleteAgency(id: string): Observable<any> {
    return this.http.delete(this.url + id)
  }
}
