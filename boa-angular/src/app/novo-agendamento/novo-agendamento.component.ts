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

  listaHorario: Horario[] = [
    {'id' : 1,'horarioString' : '10:00'},
    {'id' : 2,'horarioString' : '11:00'},
    {'id' : 3,'horarioString' : '12:00'},
    {'id' : 4,'horarioString' : '13:00'},
    {'id' : 4,'horarioString' : '13:00'},
    {'id' : 4,'horarioString' : '13:00'},
    {'id' : 4,'horarioString' : '13:00'},
    {'id' : 4,'horarioString' : '13:00'},
    {'id' : 4,'horarioString' : '13:00'},
    {'id' : 4,'horarioString' : '13:00'},
  ]
  


  unidades: Unidade[] = [
    {'nomeUnidade': 'Missionária', 'listaSala':[{'id' : 1, 'numero': 1}]  }
  ]
  
  constructor() { }

  ngOnInit() {
  }

  realizarAgendamento(horario: Horario){
    alert(horario.id);
  }
}
