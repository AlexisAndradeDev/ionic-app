import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rutinas',
  templateUrl: './rutinas.page.html',
  styleUrls: ['./rutinas.page.scss'],
})
export class RutinasPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectLogout() {
    this.router.navigate(['/logout']);
  }
}
