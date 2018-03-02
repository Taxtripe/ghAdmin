import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListComponent } from './userList.component';
import { UserDetailComponent } from './userDetail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TabsModule } from 'ngx-bootstrap/tabs';

//routing
import { UserDatasRoutingModule } from './userdatas-routing.module';

@NgModule({
  imports: [
    UserDatasRoutingModule, CommonModule, NgbModule, TabsModule
  ],
  declarations: [
    UserListComponent, UserDetailComponent
  ]
})
export class UserDatasModule { }
