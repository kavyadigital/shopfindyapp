import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountcompletePage } from './accountcomplete.page';

const routes: Routes = [
  {
    path: '',
    component: AccountcompletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountcompletePageRoutingModule {}
