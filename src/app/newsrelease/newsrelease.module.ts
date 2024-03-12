import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsreleasePageRoutingModule } from './newsrelease-routing.module';

import { NewsreleasePage } from './newsrelease.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsreleasePageRoutingModule
  ],
  declarations: [NewsreleasePage]
})
export class NewsreleasePageModule {}
