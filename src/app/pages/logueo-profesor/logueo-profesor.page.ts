import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logueo-profesor',
  templateUrl: './logueo-profesor.page.html',
  styleUrls: ['./logueo-profesor.page.scss'],
})
export class LogueoProfesorPage implements OnInit {

  constructor(private router:Router) { }

  docente = new FormGroup({
    usuario: new FormControl('Docente1'),
    contraseña: new FormControl('Holamundo123')
  });
  ngOnInit() {
  }
  lista_doce = new Array();
  doce:any;

  Login(){
    this.doce={
    usuario: this.docente.controls.usuario.value,
    contraseña : this.docente.controls.contraseña.value
    };
    this.lista_doce.push(this.doce);
    var credenciales = this.lista_doce;
    localStorage.setItem('docente',JSON.stringify(credenciales));
    this.router.navigate(['/perfil-profesor']);
  }
}
