import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FillmecartazPage } from './fillmecartaz.page';

const routes: Routes = [
  {
    path: '',
    component: FillmecartazPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FillmecartazPageRoutingModule {}
