import { OperationComponent } from './operation/operation.component';
import { AlertesComponent } from './alertes/alertes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAlertesComponent } from './add-alertes/add-alertes.component';
import { UpdateAlertesComponent } from './update-alertes/update-alertes.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AuthguardGuard } from './authguard.guard';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
{ path: 'login', component: LoginComponent },
{ path: "", redirectTo: "alertes", pathMatch: "full" },
{ path: 'registration', component: RegisterComponent },
{ path: 'dashboard', component: AppComponent,canActivate: [AuthguardGuard] },
  { path: "alertes", component : AlertesComponent},
  { path: "add-alertes", component : AddAlertesComponent},
  // { path: "", redirectTo: "alertes", pathMatch: "full" },
  { path: "updateAlertes/:id", component : UpdateAlertesComponent},
  { path: "operation", component : OperationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
