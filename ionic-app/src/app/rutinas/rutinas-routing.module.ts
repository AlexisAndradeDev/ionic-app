import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RutinasPage } from './rutinas.page';

const routes: Routes = [
  {
    path: '',
    component: RutinasPage
  },
  {
    path: 'crear-rutinas',
    loadChildren: () => import('./crear-rutinas/crear-rutinas.module').then( m => m.CrearRutinasPageModule)
  },  {
    path: 'rutina',
    loadChildren: () => import('./rutina/rutina.module').then( m => m.RutinaPageModule)
  },
  {
    path: 'rutinas-comunitarias',
    loadChildren: () => import('./rutinas-comunitarias/rutinas-comunitarias.module').then( m => m.RutinasComunitariasPageModule)
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RutinasPageRoutingModule {}
