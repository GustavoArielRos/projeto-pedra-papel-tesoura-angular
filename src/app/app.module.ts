import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { EscolhasComponent } from './components/escolhas/escolhas.component';
import { ConteudoComponent } from './components/conteudo/conteudo.component';


@NgModule({
  declarations: [
    AppComponent,
    
    
    HeaderComponent,
    FooterComponent,
    EscolhasComponent,
    ConteudoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
