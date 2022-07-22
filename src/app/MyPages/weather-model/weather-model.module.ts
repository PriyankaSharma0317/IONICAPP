import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeatherModelPageRoutingModule } from './weather-model-routing.module';

import { WeatherModelPage } from './weather-model.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeatherModelPageRoutingModule
  ],
  declarations: [WeatherModelPage]
})
export class WeatherModelPageModule {}
