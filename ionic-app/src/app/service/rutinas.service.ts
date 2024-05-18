import { Injectable } from '@angular/core';
import { getFirestore, collection, addDoc, getDocs, serverTimestamp, Timestamp, collectionGroup } from 'firebase/firestore'
import { AuthService } from './auth.service';
import { Rutina } from '../interface/rutina';
import { Observable, from, map } from 'rxjs';


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

  getAllRutinas(): Observable<Rutina[]> {
    const rutinaCollection = collection(this.db, 'rutina');

    return from(getDocs(rutinaCollection)).pipe(
      map((querySnapshot: { docs: any[]; }) => {
        return querySnapshot.docs.map(
          doc => {
            const data = doc.data();
            if (data.uid === this.authService.getUserUID()) {
              return {
                nombre: data.nombre,
                ejercicios: data.ejercicios,
                fecha_creacion: (data.fecha_creacion as Timestamp).toDate().toString(),
                uid: data.uid,
                id: doc.id
              } as unknown as Rutina;
            } else {
              return undefined;
            }
          }).filter((rutina): rutina is Rutina => rutina !== undefined);
      })
    );
  }
}
