import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountAndSecurityPageRoutingModule } from './account-and-security-routing.module';

import { AccountAndSecurityPage } from './account-and-security.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountAndSecurityPageRoutingModule
  ],
  declarations: [AccountAndSecurityPage]
})
export class AccountAndSecurityPageModule {}
