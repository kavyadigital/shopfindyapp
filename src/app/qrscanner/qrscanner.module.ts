import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QRscannerPageRoutingModule } from './qrscanner-routing.module';

import { QRscannerPage } from './qrscanner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRscannerPageRoutingModule
  ],
  declarations: [QRscannerPage]
})
export class QRscannerPageModule {}
