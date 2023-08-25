import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {

  listaProdutos: any[] = [];
  totalCarrinho: number = 0; // Inicialize o total como zero

  constructor(public bdtemp: BdtempService) { }

  ngOnInit() {
    this.calcularTotalCarrinho(); // Inicialmente, calcule o total
  }

  buscarItensCarrinho() {
    this.listaProdutos = this.bdtemp.buscar('carrinho');
    this.calcularTotalCarrinho(); // Recalcula o total ao buscar os itens
  }

  ionViewWillEnter() {
    this.buscarItensCarrinho();
  }

  removerDoCarrinho(posicao: number) {
    this.bdtemp.removeProdutoCarrinho(posicao);
    this.buscarItensCarrinho();
  }

  calcularTotalCarrinho() {
    this.totalCarrinho = 0; // Zera o total antes de recalcular
    for (let produto of this.listaProdutos) {
      this.totalCarrinho += produto.valor;
    }

  }
}

