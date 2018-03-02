import { Component , OnInit, Input, Output, EventEmitter} from '@angular/core';

import { Http, Response } from '@angular/http';
import { Router , ActivatedRoute} from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Location} from '@angular/common';

@Component({
  templateUrl: 'detail.component.html'
})
export class DetailComponent {
    constructor(private http: Http,
                 private httpC: HttpClient,
                private router: Router,
                private route: ActivatedRoute,
              private _location: Location){}

    noticeInfo = {};

    noticeTitle = '';
    noticeContent = '';
    noticeId = 0;

    ngOnInit() {
         this.route
        .queryParams
        .subscribe(params => {

             this.noticeInfo = params;

             this.noticeTitle = params['subject'];
             this.noticeContent = params['contents'];
             this.noticeId = params['id'];
        });

    }

    //공지사항 수정하기
    editNotice = function(){
        let url = '';
        var id = parseInt(this.noticeId);

        console.log(this.noticeId, this.noticeTitle, this.noticeContent);

        if(confirm("해당 공지사항을 수정 하시겠습니까?") == true) {
            this.http.get(url + '?id=' + id + '&title=' + this.noticeTitle + '&content=' + this.noticeContent)
            .subscribe(
                (res: Response) => {
                    const result = res;

                    console.log(result.status);
                }
            );
        }else {
            return
        }
    };

    //공지사항 삭제하기
    delNotice = function(){
      var mainUrl = 'https://www.bebe-together.com/resource/admin/deleteN';

        // let params = new HttpParams()
        // .set('id', id)
        // .set('password', 'tProjects1228');

        var nId = Number(this.noticeId);
        console.log(typeof(nId))

        if(confirm("해당 공지사항을 삭제 하시겠습니까?") == true) {
            this.http.get(mainUrl + '?id=' + nId +'&password=tProjects1228')
        .subscribe(
            (res: Response) => {
                const result = res;

                console.log(result);
                this._location.back();
                //
                // if (result.status == 'ok') {
                //     // this.LoadTableData();
                // }
            }
        );
        }else {
            return
        }
    };
}
