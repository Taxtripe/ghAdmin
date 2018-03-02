import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { authImgComponent } from './authImg.component';

const routes: Routes = [
  {
    path: '',
    component: authImgComponent,
    data: {
      title: '가입 승인'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthImgRoutingModule {}