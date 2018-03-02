import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { authImgComponent } from './authImg.component';
import { AuthImgRoutingModule } from './authImg-routing.module';

@NgModule({
  imports: [AuthImgRoutingModule,
           CommonModule],
    declarations: [authImgComponent]
})
 
 export class AuthImgModule {}