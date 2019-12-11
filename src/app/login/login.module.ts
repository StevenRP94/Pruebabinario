
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { CompartidoModule } from './../compartido/compartido.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    CompartidoModule,

  ]
})
export class LoginModule { }
