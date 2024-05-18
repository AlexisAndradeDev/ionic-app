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
}
