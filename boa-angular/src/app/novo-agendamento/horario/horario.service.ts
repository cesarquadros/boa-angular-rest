import { environment } from './../../../environments/environment.prod';
import { ConsultaSala } from './../ConsultaSala';
import { Unidade } from './../unidade/unidade.model';
import { Horario } from './horario.model';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'
import { RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

const API_URL = environment.api;

@Injectable()
export class HorarioService {

  listaHorario: Array<Horario>

  constructor(private http: Http) { }
  
  carregarHorarios1(): Array<Horario>{
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

    carregarHorarios(): Observable<Horario[]> {

    const headers = new Headers()
    //headers.append('Content-type', 'aplication/json') não foi necessário usar o content-type
    var dados: ConsultaSala = {sala: '1', data: '12/04/2018'}

    console.log(JSON.stringify(dados))
    return this.http.post(API_URL + `boasalasdeatendimento/carregarhorariodisponivel`, 
                          dados,
                          new RequestOptions({headers: headers}) )
                    .map(response => response.json())
  }
}
