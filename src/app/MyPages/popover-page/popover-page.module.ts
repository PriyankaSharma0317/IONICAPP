import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopoverPagePageRoutingModule } from './popover-page-routing.module';

import { PopoverPagePage } from './popover-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopoverPagePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PopoverPagePage]
})
export class PopoverPagePageModule {}
