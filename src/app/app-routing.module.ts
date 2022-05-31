import { CadastraRequisitoComponent } from './home/cadastra-requisito/cadastra-requisito.component';
import { CadastroComponent } from './cadastroOuLogin/cadastro/cadastro/cadastro.component';
import { LoginComponent } from './cadastroOuLogin/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageInicialComponent } from './home/page-inicial/page-inicial.component';

const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'cadastro', component: CadastroComponent},
  {path: 'home', component: PageInicialComponent},
  {path: 'cadastrarequisito', component: CadastraRequisitoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
