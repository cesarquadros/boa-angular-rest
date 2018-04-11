import { HorarioService } from './horario.service';
import { Horario } from './horario.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'boa-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent implements OnInit {

  listaHorario: Array<Horario>

  constructor(private horarioService: HorarioService) { }

  ngOnInit() {
     this.listaHorario = this.horarioService.carregarHorarios();
  }
}
