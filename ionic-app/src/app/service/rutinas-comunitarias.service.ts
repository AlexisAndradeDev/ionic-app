import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Rutina } from '../interface/rutina';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RutinasComunitariasService {
  constructor(private authService: AuthService, private http: HttpClient) {}

  // async createRutina(rutina: Rutina) {
  //   const rutinaTemp: any = {
  //     nombre: rutina.nombre,
  //     ejercicios: rutina.ejercicios,
  //   };


  //   const docRef = await addDoc(collection(this.db, 'rutina'),
  //     {
  //       ...rutinaTemp
  //     }
  //   );
  //   console.log("Documento escrito con id: " + docRef.id);
  // }

  getAllRutinas(): Observable<Rutina[]> {
    return this.http.get<any>(`http://localhost:3000/rutinas/`);
  }

  // async getRutina(id: string): Promise<Rutina | undefined> {
  //   const docRef = doc(this.db, 'rutina', id);
  //   const docSnap = await getDoc(docRef);

  //   if (docSnap.exists()) {
  //     let data = docSnap.data();
  //     return {
  //       nombre: data['nombre'],
  //       ejercicios: data['ejercicios'],
  //       fecha_creacion: (data['fecha_creacion'] as Timestamp).toDate().toString(),
  //       uid: data['uid'],
  //       id: id
  //     } as unknown as Rutina;
  //   } else {
  //     return undefined;
  //   }
  // }

  // deleteRutina(id: string, rutinas: Rutina[]) {
  //   const docRef = doc(this.db, 'rutina', id);
  //   deleteDoc(docRef);
  //   rutinas = rutinas.filter((rutina: Rutina) => {
  //     if (rutina.id === id) return false
  //     else return true
  //   })
  //   return rutinas;
  // }

  // async actualizarRutina(rutina: Rutina, id: string) {
  //   if (rutina.id && rutina.fecha_creacion) {
  //     const docRef = doc(this.db, 'rutina', rutina.id);
  //     const rutinaTemp: any = {
  //       nombre: rutina.nombre,
  //       ejercicios: rutina.ejercicios,
  //       id: id,
  //       uid: rutina.uid,
  //       fecha_creacion: Timestamp.fromMillis(Date.parse(rutina.fecha_creacion)),
  //     };
  //     setDoc(docRef, rutinaTemp);
  //   } else {
  //     throw new Error("id de la rutina no existe");
      
  //   }
  // }
}
