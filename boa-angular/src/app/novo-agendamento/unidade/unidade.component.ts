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

   postData :  string;

  
  constructor(private unidadeService: UnidadeService) { }

  ngOnInit() {
    console.log('Carregando Salas')
    this.unidadeService.carregarSalas()/*.subscribe(unidades => this.unidades = unidades)*/
    .toPromise()
    .then(res => {
      this.unidades = res
      this.mensagemUnidade = ''
    })
    .catch(erro => {
      this.mensagemUnidade = 'Ocorreu um erro'})   

      this.unidadeService.post()
       .subscribe(
          data => this.postData = JSON.stringify(data),
          error => alert(error),
          () => console.log("acesso a webapi post ok...")
       );

  }
}
