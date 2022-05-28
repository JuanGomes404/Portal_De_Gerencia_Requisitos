
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Usuario } from 'src/app/models/usuario';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //para fins de teste v0, irei armazenar o cadastro dos usuarios em um array

  usuariosCadastrados: Usuario[] = [];
  constructor() { }

  public authenticate(email: string, senha: string): boolean{
    //verificar se o usuario está cadastrado no sistema
    //se tiver corretamente autent  cado, pode entrar no sistema
    let auth = false;
    for(let i = 0; (i < this.usuariosCadastrados.length) && (auth != true); i++){
      let u = this.usuariosCadastrados[i];

        if(u.email == email && u.senha == senha){
          //usuario existe
          auth = true

        }
      }
    return auth;
    }

  public registrarUser(user: Usuario){
    this.usuariosCadastrados.push(user);
    alert('cadastrado com sucesso')
  }

}
