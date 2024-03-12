import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SavemycardsPageRoutingModule } from './savemycards-routing.module';

import { SavemycardsPage } from './savemycards.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SavemycardsPageRoutingModule
  ],
  declarations: [SavemycardsPage]
})
export class SavemycardsPageModule {}
