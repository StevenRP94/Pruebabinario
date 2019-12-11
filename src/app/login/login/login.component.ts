import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formularioLogin: FormGroup;


  constructor(private formbuilder: FormBuilder, private login: LoginService, private router: Router) { }

  ngOnInit() {
    this.check();
    this.form();
  }

  check() {
    if (localStorage.getItem('token')) {
      this.router.navigate(['/lista']);
    }
  }

  form() {
    this.formularioLogin = this.formbuilder.group({
      email: [null, Validators.email],
      password: [null, Validators.minLength(6)]
    });
  }

  enviarForm() {
    console.log(this.formularioLogin.value);

    this.login.login(this.formularioLogin.value)
      .subscribe(data => {
        console.log(data);
        if (data['access']) {
          this.login.setToken(data['access']);
          this.router.navigate(['/lista']);
        } else {
          console.log("No hay token");
        }
      }, error => {
        console.log(error);
      });
  }


}
