import { HeaderModule } from './header/header/header.module';
import { CadastroOuLoginModule } from './cadastroOuLogin/cadastro-ou-login.module';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { HomeModule } from './home/home-module.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { ConfigComponent } from './config/config.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CadastroOuLoginModule,
    HomeModule,
    HeaderModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
