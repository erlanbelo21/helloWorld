import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';
@Component({
  selector: 'app-acao',
  templateUrl: './animacao.page.html',
  styleUrls: ['./animacao.page.scss'],
})
export class AnimacaoPage implements OnInit {
  qtdeItensCarrinho = 0;

  listaProdutos = [
    {nome: "Raya and the last dragon",
    valor: 25,
    foto:"https://pbs.twimg.com/media/Eo52b3hW4AEPNnX?format=jpg&name=4096x4096"
    },
    {nome: "Encanto",
    valor: 22,
    foto:"https://lumiere-a.akamaihd.net/v1/images/encanto_ka_bpo_pay1_ee2c2e0c.jpeg"
    },
    {nome: "Ralph breaks o the internet",
    valor: 30,
    foto:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbBMsJo8MIlOOcqYZdM6VimwbX-vwXZUiOV0orVsP2qfKfZRYn1pyo_56NksWFYxeFPDo&usqp=CAU"
    },

    {nome: "luca",
    valor: 28,
    foto:"https://lumiere-a.akamaihd.net/v1/images/poster_002_ffcbf145.png?region=0%2C0%2C864%2C1280"
    },

    {nome: "Procurando nemo",
    valor: 22,
    foto:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvo1elF04e8h_s4B3xjEJxlomsdm1aAcrrFObqbDyD2XItR7JOXz8gffLHy57c0SEcEWM&usqp=CAU"
  }



  ];

  constructor(public bdtemp: BdtempService) {

   }

  ngOnInit() {
  }

  addProdutoCarrinho(produto: any){
    this.bdtemp.addProdutoCarrinho(produto);

    this.buscarDadosCarrinho();
  }

  buscarDadosCarrinho(){

    this.qtdeItensCarrinho = this.bdtemp.buscar  ('qtdeItensCarrinho');
  }
}
