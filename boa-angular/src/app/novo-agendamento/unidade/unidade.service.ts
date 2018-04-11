import { ConsultaSala } from './../ConsultaSala';
import { environment } from './../../../environments/environment';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import { Unidade } from './unidade.model';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

const API_URL = environment.api;

@Injectable()
export class UnidadeService {

  constructor(private http: Http) { }

  carregarSalas(): Observable<Unidade[]>{
    return this.http.get(API_URL + `boasalasdeatendimento/unidades`)
    .map(response => response.json())
  }

  post() {

    var dados: ConsultaSala = {sala: '1', data: '19/07/1988'}

    var json = JSON.stringify(dados);
    var params = 'json=' + json;
    var cabe = new Headers();
    cabe.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(API_URL + `boasalasdeatendimento/carregarsalas`, params, {headers : cabe})
      .map(res=> res.json());
  }
}
