import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { Router } from '@angular/router';
// declare function init_plugins();
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  usuario: Usuario;


  constructor(public _usuarioService: UsuarioService,
               public router: Router) { }

  ngOnInit() {
    this.usuario = this._usuarioService.usuario;
    // init_plugins();
  }

  buscar(termino: string) {

    this.router.navigate(['/busqueda', termino]);
  }

}
