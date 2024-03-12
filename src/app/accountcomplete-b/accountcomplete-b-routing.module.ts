import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountcompleteBPage } from './accountcomplete-b.page';

const routes: Routes = [
  {
    path: '',
    component: AccountcompleteBPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountcompleteBPageRoutingModule {}
