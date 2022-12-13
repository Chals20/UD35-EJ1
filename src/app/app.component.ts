import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UD35-EJ1';
  nombre = '';
  cif = '';
  direccion = '';
  grupo = '';
  clientes:any = [];

  anadirCliente(){

    let cliente = {
      nombre:this.nombre, 
      cif:this.cif, 
      direccion:this.direccion, 
      grupo:this.grupo
    };
    
    this.clientes.push(cliente);
  }
}
