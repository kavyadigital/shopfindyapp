import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletpagePage } from './walletpage.page';

const routes: Routes = [
  {
    path: '',
    component: WalletpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletpagePageRoutingModule {}
