import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Rutina } from '../interface/rutina';
import { RutinasService } from '../service/rutinas.service';

@Component({
  selector: 'app-rutinas',
  templateUrl: './rutinas.page.html',
  styleUrls: ['./rutinas.page.scss'],
})
export class RutinasPage implements OnInit {

  rutinas: Rutina[] = [];

  constructor(private router: Router, private rutinasService: RutinasService,
    private changeDetection: ChangeDetectorRef) { }

  ngOnInit() {
    this.rutinasService.getAllRutinas().subscribe(rutinas => {
      this.rutinas = rutinas;
    });
  }

  redirectLogout() {
    this.router.navigate(['/logout']);
  }

  deleteRutina(id?: string) {
    if (id) {
      this.rutinas = this.rutinasService.deleteRutina(id, this.rutinas);
      this.changeDetection.detectChanges();
    } else {
      alert("Rutina no encontrada.");
    }
  }

  refresh() {
    this.rutinasService.getAllRutinas().subscribe(rutinas => {
      this.rutinas = rutinas;
    });
    this.changeDetection.detectChanges();
  }
}
