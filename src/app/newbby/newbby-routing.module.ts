import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewbbyComponent } from './newbby.component';

const routes: Routes = [
  {
    path: '',
    component: NewbbyComponent,
    data: {
      title: '신규 회원 관리'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewbbyRoutingModule {}