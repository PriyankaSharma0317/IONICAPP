import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeatherModelPage } from './weather-model.page';

const routes: Routes = [
  {
    path: '',
    component: WeatherModelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeatherModelPageRoutingModule {}
