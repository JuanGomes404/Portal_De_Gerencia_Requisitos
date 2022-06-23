import { CadastroComponent } from './cadastro/cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeLoginRegisterComponent } from './home-login-register/home-login-register.component';

@NgModule({
  declarations: [LoginComponent, CadastroComponent, HomeLoginRegisterComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule

  ],
  exports: [LoginComponent, CadastroComponent]
})
export class CadastroOuLoginModule { }
