import { AuthService } from './../../core/auth/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'pgr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private r: Router, private auth: AuthService) { }


  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [,[Validators.required, Validators.email]],
      senha: [,Validators.required]
    });
  }
  irCadastrar(){
      this.r.navigate(['cadastro']);
  }
  login(){
    if(this.auth.authenticate(this.loginForm.get('email')?.value, this.loginForm.get('senha')?.value)){
      //mudar rota para pagina de inicio
    }

  }
}
