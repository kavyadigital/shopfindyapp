import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranshistoryPageRoutingModule } from './transhistory-routing.module';

import { TranshistoryPage } from './transhistory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranshistoryPageRoutingModule
  ],
  declarations: [TranshistoryPage]
})
export class TranshistoryPageModule {}
