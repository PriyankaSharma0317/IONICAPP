import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WelcomePageRoutingModule } from './welcome-routing.module';

import { WelcomePage } from './welcome.page';
import { SharedComponentsModule } from 'src/app/sharedComponents.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedComponentsModule,
    WelcomePageRoutingModule
  ],
  declarations: [WelcomePage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class WelcomePageModule {}
