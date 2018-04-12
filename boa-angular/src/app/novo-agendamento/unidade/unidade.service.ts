import { ConsultaSala } from './../ConsultaSala';
import { environment } from './../../../environments/environment';
import { Http, Headers } from '@angular/http';
import { Unidade } from './unidade.model';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { RequestOptions } from '@angular/http';

const API_URL = environment.api;

@Injectable()
export class UnidadeService {

  constructor(private http: Http) { }

  carregarSalas(): Observable<Unidade[]>{
    return this.http.get(API_URL + `boasalasdeatendimento/unidades`)
    .map(response => response.json())
  }
}
