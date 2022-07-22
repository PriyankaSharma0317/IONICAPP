import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'rooms',
    loadChildren: () => import('./MyPages/rooms/rooms.module').then(m => m.RoomsPageModule)
  },
  {
    path: 'smart-appl',
    loadChildren: () => import('./MyPages/smart-appl/smart-appl.module').then(m => m.SmartApplPageModule)
  },
  {
    path: 'network',
    loadChildren: () => import('./MyPages/network/network.module').then(m => m.NetworkPageModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./MyPages/add/add.module').then(m => m.AddPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./Tabs/user/user.module').then(m => m.UserPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./Registration/welcome/welcome.module').then(m => m.WelcomePageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./Registration/signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./Registration/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./Registration/forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./MyPages/modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./MyPages/account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'account-and-security',
    loadChildren: () => import('./MyPages/account-and-security/account-and-security.module').then( m => m.AccountAndSecurityPageModule)
  },
  {
    path: 'email-address',
    loadChildren: () => import('./MyPages/email-address/email-address.module').then( m => m.EmailAddressPageModule)
  },
  {
    path: 'popover-page',
    loadChildren: () => import('./MyPages/popover-page/popover-page.module').then( m => m.PopoverPagePageModule)
  },
  {
    path: 'device-modal',
    loadChildren: () => import('./MyPages/device-modal/device-modal.module').then( m => m.DeviceModalPageModule)
  },
  {
    path: 'weather-model',
    loadChildren: () => import('./MyPages/weather-model/weather-model.module').then( m => m.WeatherModelPageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./MyPages/setting/setting.module').then( m => m.SettingPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./MyPages/notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./MyPages/about/about.module').then( m => m.AboutPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }