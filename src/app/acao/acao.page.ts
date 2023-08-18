import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acao',
  templateUrl: './acao.page.html',
  styleUrls: ['./acao.page.scss'],
})
export class AcaoPage implements OnInit {

  listaProdutos = [
    {nome: "Flash",
    descricao: "Cor",
    valor: 20
    },

    {nome: "Velozes e Furiosos",
    descricao: "Cor: Preto",
    valor: 35
    },

    {nome: "Besouro Azul",
    descricao: "Cor: AZUL",
    valor: 45
    },

    {nome: "Guardiões da Galaxia V.3",
    descricao: "Cor: BRANCO",
    valor: 500
    },

    {nome: "Megatubarçao 2",
    descricao: "Cor: PRETO",
    valor: 350
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
