import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SeguridadRutaGuard } from './guard/seguridad-ruta.guard';

const routes: Routes = [
  {
    path: 'home',
    title: 'Inicio',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    title: 'Iniciar sesión',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'logout',
    title: 'Cerrar sesión',
    loadChildren: () => import('./logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'rutinas',
    title: 'Rutinas',
    loadChildren: () => import('./rutinas/rutinas.module').then( m => m.RutinasPageModule),
    canActivate: [SeguridadRutaGuard]
  },
  {
    path: 'register',
    title: 'Registro',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
