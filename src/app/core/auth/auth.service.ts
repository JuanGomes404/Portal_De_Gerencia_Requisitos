import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { Auth, authState, signInWithEmailAndPassword } from '@angular/fire/auth';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

   currentUser$ = authState(this.auth);
  getUsuarioAtual(){
    return authState(this.auth);
  }
  usuariosCadastrados: Usuario[] = [];
  constructor(private auth: Auth) { }

  public authenticate(email: string, senha: string){
    //verificar se o usuario está cadastrado no sistema
    //se tiver corretamente autent  cado, pode entrar no sistema
     return from(signInWithEmailAndPassword(this.auth, email, senha));
    }

  public registrarUser(user: Usuario){
    this.usuariosCadastrados.push(user);
    alert('cadastrado com sucesso');
    //futuramente, trocar o alert por uma notificação do angular material
  }
  logout(){
    return from(this.auth.signOut());
  }

}
