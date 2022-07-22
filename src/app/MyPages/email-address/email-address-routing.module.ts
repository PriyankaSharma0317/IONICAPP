import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmailAddressPage } from './email-address.page';

const routes: Routes = [
  {
    path: '',
    component: EmailAddressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmailAddressPageRoutingModule {}
