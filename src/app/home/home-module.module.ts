import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CadastraRequisitoComponent } from './cadastra-requisito/cadastra-requisito.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageInicialComponent } from './page-inicial/page-inicial.component';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [CadastraRequisitoComponent, PageInicialComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCardModule,
    MatTableModule
  ],
  exports:[CadastraRequisitoComponent, PageInicialComponent]
})
export class HomeModule{ }
