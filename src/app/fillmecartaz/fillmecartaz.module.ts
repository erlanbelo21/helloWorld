import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FillmecartazPageRoutingModule } from './fillmecartaz-routing.module';

import { FillmecartazPage } from './fillmecartaz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FillmecartazPageRoutingModule
  ],
  declarations: [FillmecartazPage]
})
export class FillmecartazPageModule {}
