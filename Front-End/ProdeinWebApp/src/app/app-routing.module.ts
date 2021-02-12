import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PersonasComponent } from './pages/personas/personas.component';
import { FormvinculacionComponent } from './pages/formvinculacion/formvinculacion.component';
import { PruebaComponent } from './prueba/prueba.component';


const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'personas', component: PersonasComponent },
  { path: 'formvinculacion', component: FormvinculacionComponent },
  { path: 'prueba', component: PruebaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
