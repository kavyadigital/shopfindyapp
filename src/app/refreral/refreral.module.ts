import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RefreralPageRoutingModule } from './refreral-routing.module';

import { RefreralPage } from './refreral.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RefreralPageRoutingModule
  ],
  declarations: [RefreralPage]
})
export class RefreralPageModule {}
