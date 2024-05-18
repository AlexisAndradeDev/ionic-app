import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Rutina } from 'src/app/interface/rutina';
import { RutinasService } from 'src/app/service/rutinas.service';

@Component({
  selector: 'app-rutina',
  templateUrl: './rutina.page.html',
  styleUrls: ['./rutina.page.scss'],
})
export class RutinaPage implements OnInit {
  rutina: Rutina = {
    nombre: 'quebirria',
    ejercicios: [],
    fecha_creacion: 'mar/29',
    uid: 'asdfas',
    id: 'asdfadsf' 
  };
  constructor(private route: ActivatedRoute, private rutinasService: RutinasService) { }

  ngOnInit() {

  }

}
