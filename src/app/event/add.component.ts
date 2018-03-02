import { Component, ElementRef } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import {DatePipe} from '@angular/common';
import {Location} from '@angular/common';

import { ImgUploaderService } from '../services/img-upload.service';

@Component({
  templateUrl: 'add.component.html',
    providers: [ImgUploaderService, DatePipe]
})
export class AddComponent {
  title = "";
  content = "";

    constructor( private http: Http,
                 private router: Router,
                 private imgUploader:ImgUploaderService,
                  private elem: ElementRef,
                  private datePipe: DatePipe,
                  private _location: Location
                 ){

    }

    // createEvent = function(){
    //     let files = this.elem.nativeElement.querySelector('#img-input').files;
    //     let formData = new FormData();
    //     console.log(files);
    //     let file = files[0];
    //     formData.append('selectFile', file, file.name);
    //
    //     this.imgUploader.uploadImage(formData)
    //         .subscribe(
    //         (res: Response) => {
    //             var uploadResult = res.json();
    //
    //             console.log(uploadResult);
    //         }
    //     )
    // };

    createBBS = function(){

      let url = 'https://www.bebe-together.com/resource/bbs/add';

      let userId = 'admin@gmail.com';
      let date = new Date();

      if(confirm("해당글을 자유게시판에 등록 하시겠습니까?") == true) {
          console.log(userId);
          console.log(date);
          console.log(this.title);
          console.log(this.content);

        this.http.post(url, {
          userId: userId,
          date: date,
          subject: this.title,
          contents: this.content,
          type: 'normal'
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
