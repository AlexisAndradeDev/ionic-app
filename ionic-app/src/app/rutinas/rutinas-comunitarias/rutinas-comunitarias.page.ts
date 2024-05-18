import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rutina } from 'src/app/interface/rutina';
import { RutinasComunitariasService } from 'src/app/service/rutinas-comunitarias.service';

@Component({
  selector: 'app-rutinas-comunitarias',
  templateUrl: './rutinas-comunitarias.page.html',
  styleUrls: ['./rutinas-comunitarias.page.scss'],
})
export class RutinasComunitariasPage implements OnInit {
  rutinas: Rutina[] = [];

  constructor(private router: Router, private rutinasComunitariasService: RutinasComunitariasService,
    private changeDetection: ChangeDetectorRef) { }

  ngOnInit() {
    this.rutinasComunitariasService.getAllRutinas().subscribe(rutinas => {
      this.rutinas = rutinas;
    });
  }

  // deleteRutina(id?: string) {
  //   if (id) {
  //     this.rutinas = this.rutinasComunitariasService.deleteRutina(id, this.rutinas);
  //     this.changeDetection.detectChanges();
  //   } else {
  //     alert("Rutina no encontrada.");
  //   }
  // }

  refresh() {
    this.rutinasComunitariasService.getAllRutinas().subscribe(rutinas => {
      this.rutinas = rutinas;
    });
    this.changeDetection.detectChanges();
  }

  ionViewWillEnter(){
    this.refresh();
  }
}
