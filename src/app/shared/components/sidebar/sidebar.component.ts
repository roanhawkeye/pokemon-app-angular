import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private authService: AuthService, private router: Router){}

  login(): void{
    this.authService.login();
  }

  logout(): void{
    this.authService.logout();
    this.router.navigate(['login']);
  }

  get isUserLogin(): boolean{
    return this.authService.isUserLogin;
  }

}
