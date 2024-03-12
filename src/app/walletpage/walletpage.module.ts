import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletpagePageRoutingModule } from './walletpage-routing.module';

import { WalletpagePage } from './walletpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletpagePageRoutingModule
  ],
  declarations: [WalletpagePage]
})
export class WalletpagePageModule {}
