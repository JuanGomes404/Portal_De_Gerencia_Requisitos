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
  get email(){
    return this.loginForm.get('email')?.value;
  }
  get senha(){
    return this.loginForm.get('senha')?.value;
  }
  irCadastrar(){
      this.r.navigate(['cadastro']);
  }
  login(){
   if(!this.loginForm.valid){
     return;
   }
   const {email, senha} = this.loginForm.value;
   this.auth.authenticate(this.email, this.senha).subscribe(() =>{
     this.r.navigate(['home']);


   });

  }
}
