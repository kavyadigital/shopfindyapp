import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountcompleteBPageRoutingModule } from './accountcomplete-b-routing.module';

import { AccountcompleteBPage } from './accountcomplete-b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountcompleteBPageRoutingModule
  ],
  declarations: [AccountcompleteBPage]
})
export class AccountcompleteBPageModule {}
