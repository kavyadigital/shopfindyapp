import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnterotpPageRoutingModule } from './enterotp-routing.module';

import { EnterotpPage } from './enterotp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnterotpPageRoutingModule
  ],
  declarations: [EnterotpPage]
})
export class EnterotpPageModule {}
