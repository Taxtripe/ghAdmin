import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './userList.component';
import { UserDetailComponent } from './userDetail.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: '회원 관리'
    },
    children: [
      {
        path: 'list',
        component: UserListComponent,
        data: {
          title: '회원 정보'
        }
      },
        {
        path: 'detail',
        component: UserDetailComponent,
        data: {
          title: '상세 정보'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDatasRoutingModule {}
