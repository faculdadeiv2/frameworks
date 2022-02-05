import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  dados: any = [];

  constructor() { }

  ngOnInit(): void {
    this.buscarCadastros();
  }

  buscarCadastros(): void {
    this.dados = JSON.parse(localStorage.getItem('dados') as string);
    console.log(this.dados);
  }

  excluirCadastro(posicao: any) {
    this.dados.splice(posicao, 1);
    localStorage.setItem('dados', JSON.stringify(this.dados));
  }

}
