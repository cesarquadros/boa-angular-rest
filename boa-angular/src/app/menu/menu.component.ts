import { RouterModule, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'boa-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  usuarioLogado = false;

  constructor(private router: Router) { }

  ngOnInit() {
      if(this.usuarioLogado){
        this.router.navigate(['login']);
    }
  }

  logado(){
    this.usuarioLogado = !this.usuarioLogado;
  }
}
