import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { Auth, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { Router } from '@angular/router';
import { User } from '../class/user';

const firebaseApp = initializeApp(environment.firebaseConfig);

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLogged: any = false;
  auth: Auth;
  public error: string = '';

  constructor(private router: Router) {
    this.auth = getAuth(firebaseApp);
    onAuthStateChanged(this.auth, user => {
      if (user != undefined || user != null) {
        this.isLogged = user;
      }
    });
  }

  hasSession() {
    return this.isLogged;
  }

  getStateAuth() {
    return this.auth;
  }

  onLogin(user: User): Promise<any> {
    return signInWithEmailAndPassword(this.auth, user.email, user.password);
  }

  onRegister(user: User): Promise<any> {
    return createUserWithEmailAndPassword(this.auth, user.email, user.password);
  }

  onLogout(): Promise<void> {
    return signOut(this.auth);
  }

  getReason(authErrorCode: string): string {
    switch (authErrorCode) {
      case 'auth/missing-password':
        return 'Ingrese una contraseña.';
      case 'auth/wrong-password':
        return 'Contraseña incorrecta. Por favor, inténtelo de nuevo.';
      case 'auth/invalid-email':
        return 'Dirección de correo electrónico inválida. Por favor, revise su entrada.';
      case 'auth/user-not-found':
        return 'Usuario no encontrado. Por favor, asegúrese de haber ingresado la dirección de correo electrónico correcta.';
        case 'auth/invalid-credential':
          return 'Credencial inválida. Por favor, inténtelo de nuevo.';
        default:
        return 'Ocurrió un error. Por favor, inténtelo de nuevo.';
    }
  }
}
