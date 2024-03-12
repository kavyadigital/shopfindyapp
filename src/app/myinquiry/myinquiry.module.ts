import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyinquiryPageRoutingModule } from './myinquiry-routing.module';

import { MyinquiryPage } from './myinquiry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyinquiryPageRoutingModule
  ],
  declarations: [MyinquiryPage]
})
export class MyinquiryPageModule {}
