import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'acao',
    loadChildren: () => import('./acao/acao.module').then( m => m.AcaoPageModule)
  },  {
    path: 'carrinho',
    loadChildren: () => import('./carrinho/carrinho.module').then( m => m.CarrinhoPageModule)
  },
  {
    path: 'terror',
    loadChildren: () => import('./terror/terror.module').then( m => m.TerrorPageModule)
  },
  {
    path: 'comedia',
    loadChildren: () => import('./comedia/comedia.module').then( m => m.ComediaPageModule)
  },
  {
    path: 'animacao',
    loadChildren: () => import('./animacao/animacao.module').then( m => m.AnimacaoPageModule)
  },
  {
    path: 'fillmecartaz',
    loadChildren: () => import('./fillmecartaz/fillmecartaz.module').then( m => m.FillmecartazPageModule)
  },
  {
    path: 'fillmecartaz',
    loadChildren: () => import('./fillmecartaz/fillmecartaz.module').then( m => m.FillmecartazPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


