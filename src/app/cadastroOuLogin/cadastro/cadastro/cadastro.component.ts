import { Router } from '@angular/router';
import { Usuario } from './../../../models/usuario';
import { AuthService } from './../../../core/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'pgr-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  public cadastroForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private auth: AuthService, private route: Router) { }

  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required]
    })
  }

  register(){
    let user = new Usuario(
    this.cadastroForm.get('nome')?.value,
    this.cadastroForm.get('sobrenome')?.value,
    this.cadastroForm.get('email')?.value ,
    this.cadastroForm.get('senha')?.value);

    console.log('vai ser cadastrado')
    this.auth.registrarUser(user);
    //volta pro login
    this.route.navigate(['']);
  }
}
