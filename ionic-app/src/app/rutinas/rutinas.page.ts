import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rutina } from '../interface/rutina';
import { RutinasService } from '../service/rutinas.service';

@Component({
  selector: 'app-rutinas',
  templateUrl: './rutinas.page.html',
  styleUrls: ['./rutinas.page.scss'],
})
export class RutinasPage implements OnInit {

  rutinas: Rutina[] =[]

  constructor(private router: Router, private rutinasService: RutinasService) { }

  ngOnInit() {
    this.rutinasService.getAllRutinas().subscribe(rutinas => {
      this.rutinas = rutinas;
    });
  }

  redirectLogout() {
    this.router.navigate(['/logout']);
  }
}
