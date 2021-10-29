import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlumnoPerfilPageRoutingModule } from './alumno-perfil-routing.module';

import { AlumnoPerfilPage } from './alumno-perfil.page';
import { AppModuleModule } from 'src/app/app-module.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumnoPerfilPageRoutingModule,
    AppModuleModule
  ],
  declarations: [AlumnoPerfilPage]
})
export class AlumnoPerfilPageModule {}
