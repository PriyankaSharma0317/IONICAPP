import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountAndSecurityPage } from './account-and-security.page';

const routes: Routes = [
  {
    path: '',
    component: AccountAndSecurityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountAndSecurityPageRoutingModule {}
