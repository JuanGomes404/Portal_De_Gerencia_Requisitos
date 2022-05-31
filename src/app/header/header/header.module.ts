import { HeaderComponent } from './../header.component';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
