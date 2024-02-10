import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])
  })

  constructor(private authService: AuthService, private router: Router){}

  get password(){
    return this.loginForm.get('password');
  }

  get email(){
    return this.loginForm.get('email');
  }

  login(){
    this.authService.login();
    this.router.navigate(['']);
  }

  onSubmit(){
    if(this.loginForm.valid){
      this.login();
    }
  }

}
