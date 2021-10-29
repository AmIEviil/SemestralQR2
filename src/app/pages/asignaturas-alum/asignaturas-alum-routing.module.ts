import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsignaturasAlumPage } from './asignaturas-alum.page';

const routes: Routes = [
  {
    path: '',
    component: AsignaturasAlumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsignaturasAlumPageRoutingModule {}
