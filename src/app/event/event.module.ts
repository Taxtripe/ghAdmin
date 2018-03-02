import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './list.component';
import { AddComponent } from './add.component';
import { DetailComponent } from './detail.component';

import { EventRoutingModule } from './event-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [EventRoutingModule, CommonModule, NgbModule, FormsModule],
    declarations: [ListComponent, AddComponent, DetailComponent]
})

 export class EventModule {}
