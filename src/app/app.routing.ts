import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';

import { AuthguardGuard } from './authguard.guard';

export const routes: Routes = [
    {
    path: '',
    pathMatch: 'full',
        component: LoginComponent
  },
    {
    path: 'home',
    component: LayoutComponent,
        canActivate: [AuthguardGuard],
    data: {
      title: 'Home'
    },
    children: [
        {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
        {
        path: 'users',
            loadChildren: './userdatas/userdatas.module#UserDatasModule'
      }
      // ,
      //   {
      //   path: 'newbby',
      //       loadChildren: './newbby/newbby.module#NewbbyModule'
      // }
      ,
        {
          path: 'auth',
            loadChildren: './authImg/authImg.module#AuthImgModule'
      },
      {
        path: 'checkpoint',
          loadChildren: './checkpoint/checkpoint.module#CheckpointModule'
    },
        {
            path: 'notice',
            loadChildren: './notice/notice.module#NoticeModule'
        },
        {
            path: 'event',
            loadChildren: './event/event.module#EventModule'
        }
    ]
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
