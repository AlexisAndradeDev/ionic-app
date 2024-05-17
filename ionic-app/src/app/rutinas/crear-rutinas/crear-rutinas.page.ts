import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ejercicio } from 'src/app/interface/ejercicio';
import { Rutina } from 'src/app/interface/rutina';
import { RutinasService } from 'src/app/service/rutinas.service';

@Component({
  selector: 'app-crear-rutinas',
  templateUrl: './crear-rutinas.page.html',
  styleUrls: ['./crear-rutinas.page.scss'],
})
export class CrearRutinasPage implements OnInit {
  rutina: Rutina = {
    nombre: '',
    ejercicios: [],
  };

  constructor(private rutinasService: RutinasService, private router: Router) {}

  ngOnInit() {}

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
    try {
      this.rutinasService.createRutina(this.rutina);
      alert("Rutina creada con éxito.");
      this.router.navigate(["rutinas"])        
    } catch (error) {
      alert("Error al crear la rutina.");
      console.error(error);
    }
  }
}
