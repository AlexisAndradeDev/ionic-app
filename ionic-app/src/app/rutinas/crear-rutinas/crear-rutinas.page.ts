import { Component, OnInit } from '@angular/core';
import { Rutina } from 'src/app/interface/rutina';

@Component({
  selector: 'app-crear-rutinas',
  templateUrl: './crear-rutinas.page.html',
  styleUrls: ['./crear-rutinas.page.scss'],
})
export class CrearRutinasPage implements OnInit {
  fechaActual: string;

  constructor() {
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

  guardarRutina() {
    console.log('Rutina guardada:', this.rutina);
    // Aquí puedes agregar la lógica para guardar la rutina, como hacer una petición HTTP a tu backend
  }
}
