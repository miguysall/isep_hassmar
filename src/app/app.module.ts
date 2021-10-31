import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertesComponent } from './alertes/alertes.component';
import { AddAlertesComponent } from './add-alertes/add-alertes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateAlertesComponent } from './update-alertes/update-alertes.component';
import { HttpClientModule } from '@angular/common/http';
import { OperationComponent } from './operation/operation.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    AlertesComponent,
    AddAlertesComponent,
    UpdateAlertesComponent,
    OperationComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
