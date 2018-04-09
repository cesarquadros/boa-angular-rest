import { Unidade } from './../unidade/unidade.model';
import { Horario } from './horario.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

@Injectable()
export class HorarioService {

  constructor(private http: Http) { }

  carregarSalas(): Observable<Unidade[]>{

    return this.http.get(`http://localhost:8080/boasalasdeatendimento/salas`)
    .map(response => response.json())
  }
}
