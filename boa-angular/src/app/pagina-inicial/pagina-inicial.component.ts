import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'boa-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit {


  teste = "teste Component";

  constructor() { }

  ngOnInit() {
  }

}
