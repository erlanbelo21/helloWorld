import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  carrinho: any[] = []; // Substitua 'any[]' pelo tipo de objeto que você está usando para representar os itens no carrinho

  // ... Outros métodos e lógica do serviço ...

  calcularTotal(): number {
    let total = 0;

    for (const item of this.carrinho) {
      total += item.produto.valor * item.quantidade;
    }

    return total;
  }
}
