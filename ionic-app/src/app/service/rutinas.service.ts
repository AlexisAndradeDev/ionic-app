import { Injectable } from '@angular/core';
import { getFirestore, collection, addDoc, getDocs, serverTimestamp, Timestamp } from 'firebase/firestore'
import { AuthService } from './auth.service';
import { Rutina } from '../interface/rutina';


@Injectable({
  providedIn: 'root'
})
export class RutinasService {
  db: any;

  constructor(private authService: AuthService) { 
    this.db = getFirestore(authService.getFirebaseApp());
  }

  getFechaActualServidor() {
    return serverTimestamp();
  }

  async createRutina(rutina: Rutina) {
    const rutinaTemp: any = {
      nombre: rutina.nombre,
      ejercicios: rutina.ejercicios,
      uid: rutina.uid,
      fecha_creacion: this.getFechaActualServidor(),
    };
    const docRef = await addDoc(collection(this.db, 'rutina'),
      {
        ...rutinaTemp
      }
    );
    console.log("Documento escrito con id: " + docRef.id);
  }
}
