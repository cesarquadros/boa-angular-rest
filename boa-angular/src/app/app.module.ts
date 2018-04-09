import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { HttpModule } from '@angular/http';

import { ROUTES } from './app.routes'

import { NovoAgendamentoComponent } from './novo-agendamento/novo-agendamento.component';
import { AppComponent } from './app.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { MenuComponent } from './menu/menu.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { InformacoesComponent } from './informacoes/informacoes.component';
import { UnidadeComponent } from './novo-agendamento/unidade/unidade.component';

import { HorarioService } from './novo-agendamento/horario/horario.service';


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
    RouterModule.forRoot(ROUTES),
    HttpModule
  ],
  providers: [HorarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
