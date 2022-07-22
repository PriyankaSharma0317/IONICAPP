import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('src/app/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('../user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'smart',
    loadChildren: () => import('../smart/smart.module').then( m => m.SmartPageModule)
  },
  {
    path: 'todo',
    loadChildren: () => import('../todo/todo.module').then( m => m.TodoPageModule)
  },
  {
    path: 'smart-appl',
    loadChildren: () => import('src/app/MyPages/smart-appl/smart-appl.module').then( m => m.SmartApplPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class TabRoutingModule { }
