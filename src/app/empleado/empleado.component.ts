import { Component } from '@angular/core';
import { Empleado } from './empleado';
import { CommonModule} from '@angular/common'


@Component({
  selector: 'app-empleado', //ID
  imports: [CommonModule],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent {
  public title = "Bienvenido Empleado";
  public empleadoExt: Empleado;
  public trabajador: Array<any>;
  public trabajadorExterno: boolean;

  //public cargo = Empleado.cargo;
  //public contratado Empleado.contratado

  constructor(){
    this.empleadoExt = new Empleado("Dark souls 1",25);
    this.trabajador= [new Empleado("Marta",27)],
                     [new Empleado("Ranni",28)],
                     [new Empleado ("Sonne",22)]
    this.trabajadorExterno = true;
  }
  ngOnInit(){
    console.log(this.empleadoExt);
  }
}
