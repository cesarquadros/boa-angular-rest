import { HorarioService } from './horario.service';
import { Horario } from './horario.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'boa-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent implements OnInit {

  mensagemHorarios = 'Carregando...'
  listaHorario: Horario[]

  constructor(private horarioService: HorarioService) { }

  ngOnInit() {
    this.getHorarios();  
  }

  getHorarios(){
    this.horarioService.carregarHorarios()
    .subscribe(
      listaHorario => this.listaHorario = listaHorario,
      error => alert(error),
      () => this.tamanhoLista(this.listaHorario),
    );
  }
  tamanhoLista(lista: Horario[]){
    if(lista.length > 0){
      this.mensagemHorarios = ''
    } else {
      this.mensagemHorarios = 'Não existem horarios disponiveis'
    }
  }

    agendar(sala){
    alert('Teste Agendamento '+sala)
  }
}
