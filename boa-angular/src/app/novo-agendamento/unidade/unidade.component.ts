import { UnidadeService } from './unidade.service';
import { Unidade } from './unidade.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'boa-unidade',
  templateUrl: './unidade.component.html',
  styleUrls: ['./unidade.component.css']
})
export class UnidadeComponent implements OnInit {

  mensagemUnidade = 'Carregando...'
  unidades: Unidade[]

  constructor(private unidadeService: UnidadeService) { }

  ngOnInit() {
    console.log('Carregando Salas')
    this.unidadeService.carregarSalas()
    .subscribe(unidades => this.unidades = unidades, 
    error => alert(error),
    () => this.mensagemUnidade = '')
    
    /*
    .toPromise()
    .then(res => {
      this.unidades = res
      this.mensagemUnidade = ''
    })
    .catch(erro => {
      this.mensagemUnidade = 'Ocorreu um erro'})  */ 
  }
}
