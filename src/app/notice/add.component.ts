import { Component } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Location} from '@angular/common';

@Component({
  templateUrl: 'add.component.html'
})
export class AddComponent {

    title = "";
    content = "";

  constructor(private http: HttpClient,
                private router: Router,
              private _location: Location){}


    //공지사항 등록 결과
    createNotice = function(){

        let url = 'https://www.bebe-together.com/resource/bbs/add';

        let userId = 'admin@gmail.com';
        let date = new Date();

        if(confirm("해당 공지사항을 등록 하시겠습니까?") == true) {
            console.log(userId);
            console.log(date);
            console.log(this.title);
            console.log(this.content);

          this.http.post(url, {
            userId: userId,
            date: date,
            subject: this.title,
            contents: this.content,
            type: 'notice'
          })
          .subscribe(
            (res: Response) => {
              const result = res;

              console.log(result);
              this._location.back();
            }
          )
        }else {
            return
        }
    };
}
