import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BSsignupPageRoutingModule } from './bssignup-routing.module';

import { BSsignupPage } from './bssignup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BSsignupPageRoutingModule
  ],
  declarations: [BSsignupPage]
})
export class BSsignupPageModule {}
