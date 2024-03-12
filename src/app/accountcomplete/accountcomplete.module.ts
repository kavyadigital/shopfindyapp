import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountcompletePageRoutingModule } from './accountcomplete-routing.module';

import { AccountcompletePage } from './accountcomplete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountcompletePageRoutingModule
  ],
  declarations: [AccountcompletePage]
})
export class AccountcompletePageModule {}
