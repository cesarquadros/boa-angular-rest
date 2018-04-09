import { InformacoesComponent } from './informacoes/informacoes.component';
import { NovoAgendamentoComponent } from './novo-agendamento/novo-agendamento.component';
import { Routes } from '@angular/router'

import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component'
import { TelaLoginComponent } from './tela-login/tela-login.component'


export const ROUTES: Routes = [
    {path: 'index', component: PaginaInicialComponent },
    {path: 'login', component: TelaLoginComponent },
    {path: 'novoAgendamento', component: NovoAgendamentoComponent},
    {path: 'informacoes', component: InformacoesComponent}
]
