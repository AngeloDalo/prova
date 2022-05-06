import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteGuardService } from 'src/services/route-guard-service.service';
import { ArticoliComponent } from './articoli/articoli.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'index', component : LoginComponent},
  {path:'login', component: LoginComponent},
  {path:'welcome/:userId', component: WelcomeComponent, canActivate:[RouteGuardService]}, //passo il parametro
  {path:'articoli', component: ArticoliComponent, canActivate:[RouteGuardService]},
  {path:'logout', component: LogoutComponent},
  {path:'**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
