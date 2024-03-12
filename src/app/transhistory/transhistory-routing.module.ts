import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TranshistoryPage } from './transhistory.page';

const routes: Routes = [
  {
    path: '',
    component: TranshistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TranshistoryPageRoutingModule {}
