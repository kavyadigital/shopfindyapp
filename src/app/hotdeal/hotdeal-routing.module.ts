import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotdealPage } from './hotdeal.page';

const routes: Routes = [
  {
    path: '',
    component: HotdealPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotdealPageRoutingModule {}
