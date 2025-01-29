import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
  selector: 'app-empleado', //ID
  imports: [],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent {
  public title = "Bienvenido Empleado";
  public empleado:Empleado;
  //public cargo = Empleado.cargo;
  //public contratado Empleado.contratado

  constructor(){
    this.empleado = new Empleado("Radahn",25);
  }
  ngOnInit(){
    console.log(this.empleado);
  }
}
