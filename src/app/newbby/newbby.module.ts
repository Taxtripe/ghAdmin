import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewbbyComponent } from './newbby.component';
import { NewbbyRoutingModule } from './newbby-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FilterPipe } from '../shared/filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [NewbbyRoutingModule,
           CommonModule, NgbModule, FormsModule],
    declarations: [NewbbyComponent, FilterPipe],
    exports: [FilterPipe]
})
 
 export class NewbbyModule {}