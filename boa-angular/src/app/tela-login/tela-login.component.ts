import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'boa-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
     alert('SUBMETIDO')
  }
}
