import { Usuario } from 'src/app/models/usuario';
import { Injectable } from '@angular/core';
import {
  Auth,
  authState,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';
import { from, map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser$ = authState(this.auth);
  user = this.auth.currentUser;
  getUsuarioAtual() {

   if(this.user != null){
     return this.user.email;
   }
   else{
     return;
   }
  }
  constructor(private auth: Auth) {}

  public authenticate(email: string, senha: string) {
    //verificar se o usuario está cadastrado no sistema
    //se tiver corretamente autent  cado, pode entrar no sistema
    return from(signInWithEmailAndPassword(this.auth, email, senha));
  }

  public registrarUser(u: Usuario) {
    alert('cadastrado com sucesso');
    //futuramente, trocar o alert por uma notificação do angular material
  }
  logout() {
    return from(this.auth.signOut());
  }
}
