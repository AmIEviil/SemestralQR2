import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'logueo-alumno',
    loadChildren: () => import('./pages/logueo-alumno/logueo-alumno.module').then( m => m.LogueoAlumnoPageModule)
  },
  {
    path: 'logueo-profesor',
    loadChildren: () => import('./pages/logueo-profesor/logueo-profesor.module').then( m => m.LogueoProfesorPageModule)
  },
  {
    path: 'perfil-alumno',
    loadChildren: () => import('./pages/perfil-alumno/perfil-alumno.module').then( m => m.PerfilAlumnoPageModule)
  },
  {
    path: 'perfil-profesor',
    loadChildren: () => import('./pages/perfil-profesor/perfil-profesor.module').then( m => m.PerfilProfesorPageModule)
  },
  {
    path: 'crear-qr',
    loadChildren: () => import('./pages/crear-qr/crear-qr.module').then( m => m.CrearQRPageModule)
  },
  {
    path: 'escanear-qr',
    loadChildren: () => import('./pages/escanear-qr/escanear-qr.module').then( m => m.EscanearQRPageModule)
  },  {
    path: 'asignaturas-alum',
    loadChildren: () => import('./pages/asignaturas-alum/asignaturas-alum.module').then( m => m.AsignaturasAlumPageModule)
  },
  {
    path: 'asignaturas-docente',
    loadChildren: () => import('./pages/asignaturas-docente/asignaturas-docente.module').then( m => m.AsignaturasDocentePageModule)
  },
  {
    path: 'alumno-perfil',
    loadChildren: () => import('./pages/alumno-perfil/alumno-perfil.module').then( m => m.AlumnoPerfilPageModule)
  },
  {
    path: 'docente-perfil',
    loadChildren: () => import('./pages/docente-perfil/docente-perfil.module').then( m => m.DocentePerfilPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
