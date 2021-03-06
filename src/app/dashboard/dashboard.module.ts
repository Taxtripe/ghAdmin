import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
//import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    DashboardRoutingModule,
   ChartsModule,
   CommonModule,
   NgbModule
//    BsDropdownModule
  ],
  declarations: [ DashboardComponent ]
})
export class DashboardModule { }
