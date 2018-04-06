import { Routes } from '@angular/router'

import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component'
import { TelaLoginComponent } from './tela-login/tela-login.component'


export const ROUTES: Routes = [
    {path: '', component: PaginaInicialComponent },
    {path: 'login', component: TelaLoginComponent }
]
