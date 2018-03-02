import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DelComponent } from './del.component';
import { AddComponent } from './add.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: '체크포인트'
        },
        children: [
            {
                path: 'add',
                component: AddComponent,
                data: {
                    title: '추가항목'
                }
            },
            {
                path: 'del',
                component: DelComponent,
                data: {
                    title: '삭제항목'
                }
            }
        ]
    }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckpointRoutingModule {}
