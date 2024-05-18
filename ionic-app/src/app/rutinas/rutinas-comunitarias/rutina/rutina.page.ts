import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rutina } from 'src/app/interface/rutina';
import { RutinasService } from 'src/app/service/rutinas.service';

@Component({
  selector: 'app-rutina',
  templateUrl: './rutina.page.html',
  styleUrls: ['./rutina.page.scss'],
})
export class RutinaPage implements OnInit {

  id: string = '';
  rutina?: Rutina;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private rutinasService: RutinasService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(async (paramMap: any) => {
      this.id = paramMap.get('id');
      await this.rutinasService.getRutina(this.id).then((rutina?: Rutina) => {
        this.rutina = rutina;
      });
    });
  }

  redirectNotFound() {
    this.router.navigate(["not-found"]);
  }

  agregarEjercicio() {
    this.rutina?.ejercicios.push({
      nombre: '',
      series: 0,
      repeticiones: 0,
      descanso_en_segundos: 0,
    });
  }

  eliminarEjercicio(index: number) {
    this.rutina?.ejercicios.splice(index, 1);
  }

  actualizarRutina() {
    try {
      if (this.rutina) {
        this.rutinasService.actualizarRutina(this.rutina, this.id);
        alert("Rutina actualizada con éxito.");
      }
    } catch (error) {
      alert("Error al crear la rutina.");
      console.error(error);
    }
  }
}
