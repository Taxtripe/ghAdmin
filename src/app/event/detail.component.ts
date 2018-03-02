import { Component , OnInit, Input, Output, EventEmitter} from '@angular/core';

import { Http, Response } from '@angular/http';
import { Router , ActivatedRoute} from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  templateUrl: 'detail.component.html'
})
export class DetailComponent {
    constructor(private http: Http,
                 private httpC: HttpClient,
                private router: Router,
                private route: ActivatedRoute){}

    noticeInfo = {};

    noticeTitle = '';
    noticeContent = '';
    noticeId = 0;
    noticeUserId = '';

    noticeData = {};
    noticeImages = [];
    noticeComments = [];

    nickName = '';
    subject = '';
    contents = '';

    ngOnInit() {
         this.route
        .queryParams
        .subscribe(params => {

             this.noticeInfo = params;
             this.noticeId = params['id'];
             this.noticeUserId = params['userId'];
             console.log(this.noticeInfo);
        });

        this.getDetail();

    }

    //자유게시판 디테일 불러오기
    getDetail = function(){
      let url = 'https://www.bebe-together.com/resource/bbs/get';
      var id = parseInt(this.noticeId);
      this.http.get(url + '?id=' + id + '&userId=' + this.noticeUserId)
      .subscribe(
          (res: Response) => {
              const result = res.json();

              console.log('성공');
              console.log(result);
              this.noticeData = result;
              this.noticeImages = this.noticeData.images;
              this.noticeComments = this.noticeData.comments;

              this.nickName = this.noticeData['nickName'];
              this.subject = this.noticeData['subject'];
              this.contents = this.noticeData['contents'];
          }
      );
    }

    //댓글 삭제하기
    delComment = function(comment){
      console.log(comment);

      let delUrl = 'https://www.bebe-together.com/resource/bbs/comment/delete';
      var bid  = parseInt(this.noticeId);
      var cid = parseInt(comment.id);

      if(confirm("해당 댓글을 삭제 하시겠습니까?") == true) {
          this.http.get(delUrl + '?cid=' + cid + '&bid=' + bid)
      .subscribe(
          (res: Response) => {
              const result = res;

              console.log(result);
              window.history.back();
          }
      );
      }else {
          return
      }
    }

    //대댓글 삭제
    delReComment = function(comment){
      console.log(comment);

      let delUrl = 'https://www.bebe-together.com/resource/bbs/recomment/delete';
      var userid  = comment.userId;
      var cid = parseInt(comment.id);

      if(confirm("해당 대댓글을 삭제 하시겠습니까?") == true) {
          this.http.get(delUrl + '?id=' + cid + '&userId=' + userid)
      .subscribe(
          (res: Response) => {
              const result = res;

              console.log(result);
              window.history.back();
          }
      );
      }else {
          return
      }
    }

    //자유게시판 수정하기
    editNotice = function(){
        let url = '';
        var id = parseInt(this.noticeId);

        console.log(this.noticeId, this.noticeTitle, this.noticeContent);

        if(confirm("해당 공지사항을 수정 하시겠습니까?") == true) {
            this.http.get(url + '?id=' + id + '&title=' + this.noticeTitle + '&content=' + this.noticeContent)
            .subscribe(
                (res: Response) => {
                    const result = res;

                    console.log(result);
                    // this.noticeData = result;
                    // console,log(this.noticeData);
                }
            );
        }else {
            return
        }
    };

    //자유게시판 삭제하기
    delNotice = function(){
        let url = 'https://www.bebe-together.com/resource/admin/deleteF';
        var id = parseInt(this.noticeId);
        if(confirm("해당 게시글을 삭제 하시겠습니까?") == true) {
            this.http.get(url + '?id=' + id + '&password=tProjects1228')
        .subscribe(
            (res: Response) => {
                const result = res.json();

                console.log(result);

                if (result.status == 'ok') {
                    window.history.back();
                }
            }
        );
        }else {
            return
        }
    };
}
