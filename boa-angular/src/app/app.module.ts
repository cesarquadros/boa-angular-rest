import { NovoAgendamentoComponent } from './novo-agendamento/novo-agendamento.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { ROUTES } from './app.routes'

import { AppComponent } from './app.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { MenuComponent } from './menu/menu.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { InformacoesComponent } from './informacoes/informacoes.component';
import { UnidadeComponent } from './novo-agendamento/unidade/unidade.component';


@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    MenuComponent,
    TelaLoginComponent,
    NovoAgendamentoComponent,
    InformacoesComponent,
    UnidadeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
