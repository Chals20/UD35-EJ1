import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent {

  @Input() datosCliente: any;

  constructor() {}

  //ngOnInit(): void {

  //}
}
