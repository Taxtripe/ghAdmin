import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router, ActivatedRoute} from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Location } from '@angular/common';
@Component({
    templateUrl: 'authImg.component.html'
})

export class authImgComponent {
    private noticeUrl = 'https://www.somebby.co.kr/resource/auth';
    userInfo = {
    };

    userName = '';
    userNick = '';
    userGender = '';
    userBirth = '';
    userMain = '';
    userSub = '';

     constructor(
       private http:Http,
       private router: Router,
       private route: ActivatedRoute,
       private location: Location
     ){}

     ngOnInit() {

         this.route
        .queryParams
        .subscribe(params => {
          
             this.userInfo = params;
             this.userName = this.userInfo['email'];
             this.userNick = this.userInfo['nickName'];
             this.userGender = this.userInfo['gender'];
             this.userBirth = this.userInfo['birthDate'];
        });

         this.getUserInfo();
      }

    getUserInfo = function(){
        var getUrl = 'https://www.somebby.co.kr/resource/user/get?email=' + this.userName;

        let params = new HttpParams()
        .set('email', this.userName)
            this.http.get(getUrl)
            .subscribe(
            (res: Response) => {
                const result = res.json();

                console.log(result);

                this.userMain = result.data.profileImages[0].url;
                this.userSub = result.data.profileImages[1].url;

                if (result.status == 200) {
                    console.log('이거 실행되니?');
                }
            }
        );
    };

    //회원가입 비승인
    rejectUser = function(){
        var rejectUrl = this.noticeUrl + '/reject';

        let params = new HttpParams()
        .set('userId', this.userName)
        .set('password', 'pave12way');

        console.log(params);

        if(confirm("현재 회원을 불합격처리 하시겠습니까?") == true) {
          console.log("불합격");
            this.http.get(rejectUrl , {params})
            .subscribe(
            (res: Response) => {
                const result = res.json();

                console.log(result);
                if (result.status == 200) {
                    console.log('이거 실행되니?');
                    window.history.back();
                    console.log('이거 실행되니?');
                }
            }
        );

            }else {
              return
            }
    };

    //회원가입 승인
    approveUser = function(){
        var approveUrl = this.noticeUrl + '/approve';

        let params = new HttpParams()
        .set('userId', this.userName)
        .set('password', 'pave12way');

        if(confirm("현재 회원을 합격처리 하시겠습니까?") == true) {
              console.log("합격");

            this.http.get(approveUrl , {params})
            .subscribe(
            (res: Response) => {
                const result = res.json();

                console.log(result);

                if (result.status == 200) {
                    console.log('이거 실행되니?');
                    window.history.back();
                    console.log('이거 실행되니?');
                }
              });
            }else {
              return
            }
      };
}
