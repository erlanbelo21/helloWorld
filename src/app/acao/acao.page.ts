import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';
@Component({
  selector: 'app-acao',
  templateUrl: './acao.page.html',
  styleUrls: ['./acao.page.scss'],
})
export class AcaoPage implements OnInit {
  qtdeItensCarrinho = 0;

  listaProdutos = [
    {nome: "Flash",
    valor: 20,
    foto:"https://pipocamoderna.com.br/storage/2017/10/Justiceleague-FLASH-628.jpg"
    },
    {nome: "Sisu Uma História De Determinação",
    valor: 20,
    foto:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTolwabPEVRiDyjcb60HhUifwdB92TVyySp904-euH5NDOZUuDP"
    },
    {nome: "John Wick 4: Baba Yaga",
    valor: 20,
    foto:"https://img.youtube.com/vi/yjRHZEUamCc/hqdefault.jpg"
    },

    {nome: "Velozes e Furiosos",
    valor: 35,
    foto:"https://i.ytimg.com/vi/a1w9x5U88jU/maxresdefault.jpg"
    },

    {nome: "Besouro Azul",
    valor: 45,
    foto:"https://th.bing.com/th?id=OIF.yjVOGVBFGzItq%2fuZobLj8Q&pid=ImgDet&rs=1"
    },



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
