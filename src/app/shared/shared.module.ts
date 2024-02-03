import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DecimeterPipe } from './pipes/decimeter.pipe';
import { HectogramPipe } from './pipes/hectograms.pipe';



@NgModule({
  declarations: [
    SidebarComponent,
    DecimeterPipe,
    HectogramPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    DecimeterPipe,
    HectogramPipe
  ]
})
export class SharedModule { }
