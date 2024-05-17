import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rutina } from 'src/app/interface/rutina';
import { collection, setDoc, doc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

@Component({
  selector: 'app-crear-rutinas',
  templateUrl: './crear-rutinas.page.html',
  styleUrls: ['./crear-rutinas.page.scss'],
})
export class CrearRutinasPage implements OnInit {
  fechaActual: string;
  firebaseConfig = {
    apiKey: "AIzaSyCf7OjEvoRpW9RHmE0r7NvaG0wWaXO3Lko",
    authDomain: "ionic-app-6a9e5.firebaseapp.com",
    projectId: "ionic-app-6a9e5",
    storageBucket: "ionic-app-6a9e5.appspot.com",
    messagingSenderId: "406470949843",
    appId: "1:406470949843:web:099bd3034b5fc40ec50d26"
  };

  app = initializeApp(this.firebaseConfig);

  db = getFirestore(this.app);

  constructor(private router: Router) {
    this.fechaActual = this.obtenerFechaActual();
  }

  ngOnInit() {}

  obtenerFechaActual(): string {
    const fecha = new Date();
    const año = fecha.getFullYear();
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); // Los meses comienzan desde 0
    const dia = fecha.getDate().toString().padStart(2, '0');
    return `${dia}/${mes}/${año}`;
  }

  rutina: Rutina = {
    nombre: '',
    ejercicios: [],
    fecha_creacion: '',
  };

  agregarEjercicio() {
    this.rutina.ejercicios.push({
      nombre: '',
      series: 0,
      repeticiones: 0,
      descanso_en_segundos: 0,
    });
  }

  eliminarEjercicio(index: number) {
    this.rutina.ejercicios.splice(index, 1);
  }

  async guardarRutina() {
    this.rutina.fecha_creacion = this.fechaActual;
    const nuevaRutina = doc(collection(this.db, 'rutina'));
    await setDoc(nuevaRutina, this.rutina);
    console.log('Rutina guardada:', this.rutina);
    // Aquí puedes agregar la lógica para guardar la rutina, como hacer una petición HTTP a tu backend\
    this.router.navigate(['/rutinas']);
  }
}
