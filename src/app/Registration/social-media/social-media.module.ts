import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular'
import { SocialMediaComponent } from './social-media.component';

@NgModule({
  declarations: [SocialMediaComponent],
  entryComponents: [],
  imports: [CommonModule, IonicModule.forRoot()],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [SocialMediaComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SocialMediaModule {}
