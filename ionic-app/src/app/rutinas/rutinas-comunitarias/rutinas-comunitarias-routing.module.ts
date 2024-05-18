import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RutinasComunitariasPage } from './rutinas-comunitarias.page';

const routes: Routes = [
  {
    path: '',
    component: RutinasComunitariasPage
  },
  {
    path: 'crear-rutinas',
    loadChildren: () => import('./crear-rutinas/crear-rutinas.module').then( m => m.CrearRutinasPageModule)
  },
  {
    path: 'rutina',
    loadChildren: () => import('./rutina/rutina.module').then( m => m.RutinaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RutinasComunitariasPageRoutingModule {}
