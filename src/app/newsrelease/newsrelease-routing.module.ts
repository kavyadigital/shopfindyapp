import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsreleasePage } from './newsrelease.page';

const routes: Routes = [
  {
    path: '',
    component: NewsreleasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsreleasePageRoutingModule {}
