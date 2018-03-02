import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './list.component';
import { AddComponent } from './add.component';
import { DetailComponent } from './detail.component';

import { NoticeRoutingModule } from './notice-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FilterPipe } from '../shared/filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [NoticeRoutingModule, CommonModule, NgbModule, FormsModule],
    declarations: [ListComponent, AddComponent, DetailComponent]
})
 
 export class NoticeModule {}