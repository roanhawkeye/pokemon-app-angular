import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthService {
  public isUserLogin: boolean = false;

  constructor() { }

  login(){
    this.isUserLogin = true;
  }

  logout(){
    this.isUserLogin = false;
  }


}
