import { Component } from '@angular/core';
import { AlumnadoDAW } from './alumnado-daw';

@Component({
  selector: 'app-alumnado-daw',
  imports: [],
  templateUrl: './alumnado-daw.component.html',
  styleUrl: './alumnado-daw.component.css'
})
export class AlumnadoDAWComponent {


  public alumnos1daw: AlumnadoDAW[] = [];
  constructor() {
    this.alumnos1daw = [
      new AlumnadoDAW(
        "Marta",
        "Rodenas",
        "1234568X",
        new Date('2002-01-01').toLocaleDateString("en-US"),
        "Sevilla",
        "664489665",
        "1DAW",
        ["Matemáticas", "Historia"]
      ),
      new AlumnadoDAW(
        "Carlos",
        "Fernández",
        "8765432Y",
        new Date('2001-06-15').toLocaleDateString("en-US"),
        "Madrid",
        "600700800",
        "2DAW",
        ["Programación", "Bases de Datos"]
      )
    ];
  }

  ngOnInit(){
    console.log(this.alumnos1daw);
  }

  mostrarAlumnos(valor: boolean){
    this.alumnos1daw = [];
  }
}
