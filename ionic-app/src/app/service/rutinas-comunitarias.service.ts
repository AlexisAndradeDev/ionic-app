import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Rutina } from '../interface/rutina';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class RutinasComunitariasService {
  constructor(private authService: AuthService, private http: HttpClient) {}

  createRutina(rutina: Rutina) {
    const rutinaTemp: any = {
      id: uuid.v4(),
      nombre: rutina.nombre,
      ejercicios: rutina.ejercicios,
    };

    return this.http.post(`http://localhost:3000/rutinas/`, {
      ...rutinaTemp
    })
  }

  getAllRutinas(): Observable<Rutina[]> {
    return this.http.get<any>(`http://localhost:3000/rutinas/`);
  }

  getRutina(id: string): Observable<Rutina> {
    return this.http.get<any>(`http://localhost:3000/rutina/${id}`);
  }

  deleteRutina(id: string, rutinas: Rutina[]): Observable<Rutina> {
    return this.http.delete<any>(`http://localhost:3000/rutina/${id}`);
  }

  actualizarRutina(rutina: Rutina, id: string): Observable<Rutina> {
    const rutinaTemp: any = {
      id: id,
      nombre: rutina.nombre,
      ejercicios: rutina.ejercicios,
    };
    return this.http.put<any>(`http://localhost:3000/rutina/${id}`, {
      ...rutinaTemp
    });
  }
}
