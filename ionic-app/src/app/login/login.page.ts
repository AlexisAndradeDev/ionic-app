import { Component, OnInit } from '@angular/core';
import { User } from '../class/user';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: User = new User();

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  async onLogin() {
    this.authService.onLogin(this.user).then(userCredential => {
      // Se logueó con éxito
      console.log("Se ha iniciado sesión con éxito.");
      alert("Se ha iniciado sesión con éxito.");
      this.router.navigate(["/rutinas"]);
    }).catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode);
      alert(
        "Error al iniciar sesión.\n\n" + this.authService.getReason(errorCode)
      );
    });
  }

}
