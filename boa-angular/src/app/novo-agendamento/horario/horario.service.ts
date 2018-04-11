import { Unidade } from './../unidade/unidade.model';
import { Horario } from './horario.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

@Injectable()
export class HorarioService {

  listaHorario: Array<Horario>

  constructor(private http: Http) { }
  
  carregarHorarios(): Array<Horario>{
    return this.listaHorario = [
    {'id' : 1,'horarioString' : '10:00'},
    {'id' : 2,'horarioString' : '11:00'},
    {'id' : 3,'horarioString' : '12:00'},
    {'id' : 4,'horarioString' : '13:00'},
    {'id' : 5,'horarioString' : '14:00'},
    {'id' : 6,'horarioString' : '15:00'},
    {'id' : 7,'horarioString' : '16:00'},
    {'id' : 8,'horarioString' : '17:00'},
    {'id' : 9,'horarioString' : '18:00'},
    {'id' : 10,'horarioString' : '19:00'},
    ]
  }
}
