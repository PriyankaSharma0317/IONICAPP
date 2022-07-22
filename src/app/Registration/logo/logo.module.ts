import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { LogoComponent } from './logo.component';

@NgModule({
  declarations: [LogoComponent],
  entryComponents: [],
  imports: [CommonModule, IonicModule.forRoot()],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [LogoComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class LogoModule {}
