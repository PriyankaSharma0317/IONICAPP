import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { TabComponent } from './tab.component';

@NgModule({
  declarations: [TabComponent],
  entryComponents: [],
  imports: [CommonModule, IonicModule.forRoot()],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [TabComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class TabComponentModule {}
