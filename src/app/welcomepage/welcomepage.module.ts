import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WelcomepagePageRoutingModule } from './welcomepage-routing.module';

import { WelcomepagePage } from './welcomepage.page';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WelcomepagePageRoutingModule
  ],
  declarations: [WelcomepagePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WelcomepagePageModule {}
