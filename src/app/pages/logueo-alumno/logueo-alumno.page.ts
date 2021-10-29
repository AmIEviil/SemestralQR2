import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logueo-alumno',
  templateUrl: './logueo-alumno.page.html',
  styleUrls: ['./logueo-alumno.page.scss'],
})
export class LogueoAlumnoPage implements OnInit {

  constructor(private router:Router) { }

  estudiante = new FormGroup({
    usuario: new FormControl('Estudiante1'),
    contraseña: new FormControl('Holamundo123')
  });
  ngOnInit () {}
  lista_estu = new Array();
  estu:any;

  Login(){
    this.estu={
    usuario: this.estudiante.controls.usuario.value,
    contraseña : this.estudiante.controls.contraseña.value
    };
    this.lista_estu.push(this.estu);
    var credenciales = this.lista_estu;
    localStorage.setItem('estudiante',JSON.stringify(credenciales));
    this.router.navigate(['/perfil-alumno']);
  }
}
