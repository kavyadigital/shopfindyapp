import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatedetailspagePage } from './catedetailspage.page';

const routes: Routes = [
  {
    path: '',
    component: CatedetailspagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatedetailspagePageRoutingModule {}
