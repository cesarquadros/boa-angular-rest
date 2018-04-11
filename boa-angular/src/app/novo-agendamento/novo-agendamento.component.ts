import { UnidadeService } from './unidade/unidade.service';
import { HorarioService } from './horario/horario.service';
import { Sala } from './unidade/sala.model';
import { Horario } from './horario/horario.model';
import { Unidade } from './unidade/unidade.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'boa-novo-agendamento',
  templateUrl: './novo-agendamento.component.html',
  styleUrls: ['./novo-agendamento.component.css']
})
export class NovoAgendamentoComponent implements OnInit {

  data: string
  
  constructor() { }

  ngOnInit() {
  }

  realizarAgendamento(horario: Horario){
    alert(horario.id)
  }
}
