import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DecimeterPipe } from './pipes/decimeter.pipe';
import { HectogramPipe } from './pipes/hectograms.pipe';
import { LoginComponent } from './components/login/login.component';



@NgModule({
  declarations: [
    SidebarComponent,
    DecimeterPipe,
    HectogramPipe,
    LoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    DecimeterPipe,
    HectogramPipe,
    LoginComponent
  ]
})
export class SharedModule { }
