import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsignaturasAlumPageRoutingModule } from './asignaturas-alum-routing.module';

import { AsignaturasAlumPage } from './asignaturas-alum.page';
import { AppModuleModule } from 'src/app/app-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsignaturasAlumPageRoutingModule,
    AppModuleModule
  ],
  declarations: [AsignaturasAlumPage]
})
export class AsignaturasAlumPageModule {}
