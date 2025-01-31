import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { EmpleadoComponent } from './empleado/empleado.component'

export const routes: Routes = [
    {path: '', redirectTo:'home', pathMatch:'full'},
    {path:'home', component: HomeComponent},
    {path:'empleado', component: EmpleadoComponent},
    //{path: }
];
