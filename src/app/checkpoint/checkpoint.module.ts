import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DelComponent } from './del.component';
import { AddComponent } from './add.component';

import { CheckpointRoutingModule } from './checkpoint-routing.module';

@NgModule({
  imports: [CheckpointRoutingModule,CommonModule],
    declarations: [DelComponent, AddComponent]
})

 export class CheckpointModule {}
