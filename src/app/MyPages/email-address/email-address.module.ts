import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmailAddressPageRoutingModule } from './email-address-routing.module';

import { EmailAddressPage } from './email-address.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmailAddressPageRoutingModule
  ],
  declarations: [EmailAddressPage]
})
export class EmailAddressPageModule {}
