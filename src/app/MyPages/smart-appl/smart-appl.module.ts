import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SmartApplPageRoutingModule } from './smart-appl-routing.module';

import { SmartApplPage } from './smart-appl.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SmartApplPageRoutingModule
  ],
  declarations: [SmartApplPage]
})
export class SmartApplPageModule {}
