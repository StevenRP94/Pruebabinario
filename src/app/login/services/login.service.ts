import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http: HttpClient) { }

  login(form) {
    return this.http.post(environment.login, form);
  }

  setToken(token) {
    localStorage.setItem('token', token);
  }

  autenticado():boolean{
    if(localStorage.getItem('token')){
      return localStorage.getItem('token').length > 2;
    }else{
      return false;
    }
    
  }
}
