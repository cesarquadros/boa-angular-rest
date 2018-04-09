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

  listaHorario: Array<Horario> = [
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
  
  unidades: Unidade[]
  
  constructor(private horarioService: HorarioService) { }

  ngOnInit() {
    this.horarioService.carregarSalas()
    .subscribe(unidades => this.unidades = unidades)
  }

  realizarAgendamento(horario: Horario){
    alert(horario.id)
  }
}
