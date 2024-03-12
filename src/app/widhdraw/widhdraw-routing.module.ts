import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WidhdrawPage } from './widhdraw.page';

const routes: Routes = [
  {
    path: '',
    component: WidhdrawPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WidhdrawPageRoutingModule {}
