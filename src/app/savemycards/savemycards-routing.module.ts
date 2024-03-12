import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SavemycardsPage } from './savemycards.page';

const routes: Routes = [
  {
    path: '',
    component: SavemycardsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SavemycardsPageRoutingModule {}
