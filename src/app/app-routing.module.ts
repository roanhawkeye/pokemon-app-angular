import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pokemon/pages/home-page/home-page.component';
import { LoginComponent } from './shared/components/login/login.component';

const routes: Routes = [
  {path: '', component: HomePageComponent },
  {path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
