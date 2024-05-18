import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RutinasComunitariasPageRoutingModule } from './rutinas-comunitarias-routing.module';

import { RutinasComunitariasPage } from './rutinas-comunitarias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RutinasComunitariasPageRoutingModule
  ],
  declarations: [RutinasComunitariasPage]
})
export class RutinasComunitariasPageModule {}
