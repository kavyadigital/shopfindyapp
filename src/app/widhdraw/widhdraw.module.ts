import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WidhdrawPageRoutingModule } from './widhdraw-routing.module';

import { WidhdrawPage } from './widhdraw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WidhdrawPageRoutingModule
  ],
  declarations: [WidhdrawPage]
})
export class WidhdrawPageModule {}
