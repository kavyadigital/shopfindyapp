import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyinquiryPage } from './myinquiry.page';

const routes: Routes = [
  {
    path: '',
    component: MyinquiryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyinquiryPageRoutingModule {}
