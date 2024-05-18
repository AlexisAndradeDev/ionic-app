import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rutina } from 'src/app/interface/rutina';
import { AuthService } from 'src/app/service/auth.service';
import { RutinasComunitariasService } from 'src/app/service/rutinas-comunitarias.service';

@Component({
  selector: 'app-crear-rutinas',
  templateUrl: './crear-rutinas.page.html',
  styleUrls: ['./crear-rutinas.page.scss'],
})
export class CrearRutinasPage implements OnInit {
  rutina: Rutina = {
    nombre: '',
    ejercicios: [],
    uid: this.authService.getUserUID(),
  };

  constructor(private rutinasService: RutinasComunitariasService, private router: Router, private authService: AuthService) {}

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
      this.rutinasService.createRutina(this.rutina).subscribe();
      alert("Rutina creada con éxito.");
      this.router.navigate(["rutinas/rutinas-comunitarias"])        
    } catch (error) {
      alert("Error al crear la rutina.");
      console.error(error);
    }
  }
}
