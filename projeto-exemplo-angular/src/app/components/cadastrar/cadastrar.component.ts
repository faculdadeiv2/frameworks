import { Component, OnInit } from '@angular/core';
import { EnderecoService } from 'src/app/services/endereco.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarComponent implements OnInit {

  nome: string = '';
  sobrenome: string = '';
  email: string = '';
  telefone: string = '';
  cep: string = '';
  rua: string = '';
  bairro: string = '';
  cidade: string = '';
  estado: string = '';
  numero: string = '';

  endereco: any = {};

  cadastros: any = [];

  constructor(private enderecoService: EnderecoService) { }

  ngOnInit(): void {
  }

  buscarEndereco(cep: string): void {
    this.enderecoService.buscaEndereco(cep)
      .subscribe(endereco => {
        this.endereco = endereco;

        this.rua = this.endereco.logradouro;
        this.bairro = this.endereco.bairro;
        this.cidade = this.endereco.localidade
        this.estado = this.endereco.uf;
      });
  }

  salvarDados(): void {
    const dados = {
      nome: this.nome,
      sobrenome: this.sobrenome,
      email: this.email,
      telefone: this.telefone,
      cep: this.cep,
      rua: this.rua,
      bairro: this.bairro,
      cidade: this.cidade,
      estado: this.estado,
      numero: this.numero
    };

    this.cadastros.push(dados);
    localStorage.setItem('dados', JSON.stringify(this.cadastros));
  }

}
