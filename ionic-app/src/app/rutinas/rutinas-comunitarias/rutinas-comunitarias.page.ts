import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rutina } from 'src/app/interface/rutina';
import { RutinasService } from 'src/app/service/rutinas.service';

@Component({
  selector: 'app-rutinas-comunitarias',
  templateUrl: './rutinas-comunitarias.page.html',
  styleUrls: ['./rutinas-comunitarias.page.scss'],
})
export class RutinasComunitariasPage implements OnInit {
  
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

  ionViewWillEnter(){
    this.refresh();
  }

}
