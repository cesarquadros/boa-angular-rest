import { UnidadeService } from './novo-agendamento/unidade/unidade.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'

import { ROUTES } from './app.routes'

import { NovoAgendamentoComponent } from './novo-agendamento/novo-agendamento.component';
import { AppComponent } from './app.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { MenuComponent } from './menu/menu.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { InformacoesComponent } from './informacoes/informacoes.component';
import { UnidadeComponent } from './novo-agendamento/unidade/unidade.component';

import { HorarioService } from './novo-agendamento/horario/horario.service';
import { HorarioComponent } from './novo-agendamento/horario/horario.component';


@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    MenuComponent,
    TelaLoginComponent,
    NovoAgendamentoComponent,
    InformacoesComponent,
    UnidadeComponent,
    HorarioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpModule,
    FormsModule
  ],
  providers: [HorarioService, UnidadeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
