import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { SubirArchivoService } from '../../services/subir-archivo/subir-archivo.service';

// declare function init_plugins();

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  usuario: Usuario;

  imagenSubir: File;
  imagenTemp: string;

  constructor(
    public _usuarioService: UsuarioService
  ) {
    this.usuario = this._usuarioService.usuario;
  }

  ngOnInit() {
   // init_plugins();
  }

  guardar( usuario: Usuario ) {
    this.usuario.nombre = usuario.nombre;
    if ( !this.usuario.google ) {
      this.usuario.email = usuario.email;
    }
    this._usuarioService.actualizarUsuario( this.usuario)
                        .subscribe();
  }

  seleccionImage(archivo: File ) {

    if ( !archivo ) {
      this.imagenSubir = null;
      return;
    }

    console.log(archivo);

    if ( archivo.type.indexOf('image') < 0 ) {
      swal('Solo imágenes', 'El archivo seleccionado no es una imagen', 'error');
      this.imagenSubir = null;
      return;
    }

    this.imagenSubir = archivo;

    let reader = new FileReader();
    let urlImagenTemp = reader.readAsDataURL( archivo );

    reader.onloadend = () =>  this.imagenTemp = reader.result;
}

  cambiarImagen() {

  this._usuarioService.cambiarImagen( this.imagenSubir, this.usuario._id );
  console.log( 'Estoy en cambiar imagen ' + this.imagenSubir );
  console.log( 'Estoy en cambiar imagen ' + this.usuario._id );

  }



}
