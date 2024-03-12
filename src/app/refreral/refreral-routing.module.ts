import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RefreralPage } from './refreral.page';

const routes: Routes = [
  {
    path: '',
    component: RefreralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RefreralPageRoutingModule {}
