import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatedetailspagePageRoutingModule } from './catedetailspage-routing.module';

import { CatedetailspagePage } from './catedetailspage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatedetailspagePageRoutingModule
  ],
  declarations: [CatedetailspagePage]
})
export class CatedetailspagePageModule {}
