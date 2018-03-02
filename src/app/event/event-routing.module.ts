import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list.component';
import { AddComponent } from './add.component';
import { DetailComponent } from './detail.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: '자유게시판'
        },
        children: [
            {
                path: 'list',
                component: ListComponent,
                data: {
                    title: '목록보기'
                }
            },
            {
                path: 'add',
                component: AddComponent,
                data: {
                    title: '추가하기'
                }
            },
            {
                path: 'detail',
                component: DetailComponent,
                data: {
                    title: '상세보기'
                }
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export  class EventRoutingModule {}
