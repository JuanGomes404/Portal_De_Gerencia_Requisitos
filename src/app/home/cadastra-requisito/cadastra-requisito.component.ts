import { Router } from '@angular/router';
import { CadastraRequisitoService } from './../../core/cadastra-requisito.service';
import { Requisito } from './../../models/requisito';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'pgr-cadastra-requisito',
  templateUrl: './cadastra-requisito.component.html',
  styleUrls: ['./cadastra-requisito.component.css']
})
export class CadastraRequisitoComponent implements OnInit {
  public cadastraRequisitoForm: FormGroup;
  listaTipoReqs = [
    {cod: 'PR', nomeReq: 'Produto'},
    {cod: 'IN', nomeReq: 'Interface'},
    {cod: 'PLA', nomeReq: 'Plataforma'}
  ]
  constructor(private frm:FormBuilder, private service: CadastraRequisitoService, private rota: Router, private auth: AuthService) { }
  ngOnInit(): void {
    this.cadastraRequisitoForm = this.frm.group({
      ecos:['',Validators.required],
      projeto: ['',Validators.required],
      tipoReq: ['', Validators.required],
      descricao: ['', [Validators.required, Validators.maxLength(350)]]
    })
  }
  get projeto(){
    return this.cadastraRequisitoForm.get('projeto')?.value
  }
  get ecos(){
    return this.cadastraRequisitoForm.get('ecos')?.value;
  }
  get descricao(){
    return this.cadastraRequisitoForm.get('descricao')?.value;
  }
  get tipoReq(){
    return this.cadastraRequisitoForm.get('tipoReq')?.value;
  }
  cadastrarReq(){
    console.log(this.auth.getUsuarioAtual());
    let email = this.auth.getUsuarioAtual();
    const r = new Requisito(email,this.descricao, this.ecos, this.projeto, this.tipoReq);


    this.service.uparRequisito(r);
    if(this.cadastraRequisitoForm.valid){
      this.rota.navigate(['home']);
    }
  }
  voltarHome(){
    this.rota.navigate(['home']);
  }
}
