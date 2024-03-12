import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotdealPageRoutingModule } from './hotdeal-routing.module';

import { HotdealPage } from './hotdeal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotdealPageRoutingModule
  ],
  declarations: [HotdealPage]
})
export class HotdealPageModule {}
