import { LoginService } from './../login/services/login.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private login: LoginService, private router: Router) {}

  canActivate():boolean {
    if (this.login.autenticado()){
      return true
    }else{
      this.router.navigateByUrl('');
    }
  }
}
