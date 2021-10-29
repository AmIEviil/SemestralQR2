import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocentePerfilPageRoutingModule } from './docente-perfil-routing.module';

import { DocentePerfilPage } from './docente-perfil.page';
import { AppModuleModule } from 'src/app/app-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocentePerfilPageRoutingModule,
    AppModuleModule
  ],
  declarations: [DocentePerfilPage]
})
export class DocentePerfilPageModule {}
