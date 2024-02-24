import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLogout() {
    this.authService.onLogout().then(() => {
      console.log("Se salió de sesión con éxito.");
      alert("Se salió de sesión con éxito.")
      this.router.navigateByUrl("/login");
    }).catch(error => {
      console.error(error);
      alert("Error al salir de sesión: " + error);    
    });
  }

}
