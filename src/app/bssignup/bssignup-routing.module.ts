import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BSsignupPage } from './bssignup.page';

const routes: Routes = [
  {
    path: '',
    component: BSsignupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BSsignupPageRoutingModule {}
