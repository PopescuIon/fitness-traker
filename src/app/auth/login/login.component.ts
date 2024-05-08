import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  maxDate:Date = new Date();
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
  loginForm = this.formBuilder.group({
    email: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
    password: [null, [Validators.required,Validators.minLength(6)]],
    birthDate:[null,[Validators.required]],
    agree:[false,[Validators.required]]
  });
  /**
   *
   */
  constructor(private formBuilder: FormBuilder) { 
    this.maxDate.setFullYear(this.maxDate.getFullYear()-18);
  }

  login(){
    console.log(this.loginForm);
  }

  get email() {
    return this.loginForm.get('email');
  } 
  get password() {
    return this.loginForm.get('password');
  }

}
