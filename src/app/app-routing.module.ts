import { HomeLoginRegisterComponent } from './cadastroOuLogin/home-login-register/home-login-register.component';
import { CadastraRequisitoComponent } from './home/cadastra-requisito/cadastra-requisito.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageInicialComponent } from './home/page-inicial/page-inicial.component';

const routes: Routes = [
  {path: '', component: HomeLoginRegisterComponent },
  {path: 'home', component: PageInicialComponent},
  {path: 'cadastrarequisito', component: CadastraRequisitoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
