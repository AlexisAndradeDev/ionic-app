import { Component, OnInit } from '@angular/core';
import { User } from '../class/user';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user: User = new User();

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  async onRegister() {
    this.authService.onRegister(this.user).then(user => {
      if (user) {
        console.log("Usuario registrado.");
        alert("Usuario registrado.");
        this.router.navigate(["login"]);
      }
    }).catch(error => {
      console.log("Error al crear usuario.");
      alert("Error al crear usuario.");
      console.error(error);
    })
  }
}
