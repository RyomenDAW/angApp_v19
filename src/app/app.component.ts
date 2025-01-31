import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { EmpleadoComponent } from './empleado/empleado.component';
import { AlumnadoDAWComponent } from './alumnado-daw/alumnado-daw.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,EmpleadoComponent,AlumnadoDAWComponent,RouterLink,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Israel Hernandez Chacon 2º DAW';
}
