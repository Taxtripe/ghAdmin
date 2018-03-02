import { Component, OnInit} from '@angular/core';
import { Http, Response, Headers,RequestOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Data } from "../services/data";

@Component({
  templateUrl: 'userDetail.component.html',
  styleUrls: ['./userDetail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private http: Http,
                 private httpC: HttpClient,
                private router: Router,
                private route: ActivatedRoute,
              private data: Data){

                // console.log(JSON.stringify(this.data.storage));
              }

    public userInfo = {};
    userName = '';
    userNick = '';
    userGender = '';
    userBirth = '';
    userMain = '';
    userSub = '';
    userLocale = '';
    userAge = '';
    role = '';

    public babyInfos = {};
    babyList = [];
    currentWeek = 0;
    statusImgUrl = '';

    public userDatas = {};
    profileImages = [];
    wholeArray = [];
    hobbyCollection = [];
    wholePlannerList = [];
    weekPlannerList = [];
    familyShares = [];

    userJob = '';
    userBlood = '';
    userAlcohol = '';
    userSmoking = '';
    userReligion = '';
    userCottonCandyAmount = '';

    babyName = '';
    bExppectedDate = '';

    ngOnInit() {
      this.route
     .queryParams
     .subscribe(params => {

          this.userInfo = params;
          this.userName = this.userInfo['email'];
          this.userNick = this.userInfo['nickName'];
          this.userGender = this.userInfo['gender'];
          this.userBirth = this.userInfo['birthDate'];
          this.userLocale = this.userInfo['addr1'] + ' / ' + this.userInfo['addr2'];
          this.role = this.userInfo['role'];
          this.userMain = this.userInfo['babyPic'];
     });

    //  this.getUserInfo();
     console.log(this.data.storage);
     this.userDatas = this.data.storage;
     this.babyList = this.userDatas['babyList'];

     this.babyInfos = this.babyList[0];
     console.log(this.babyInfos);

     this.babyName = this.babyInfos['nanme'];
     this.bExppectedDate = this.babyInfos['exppectedDate'];

     var weeks = this.weekCalc(this.babyInfos['exppectedDate']);
     console.log(weeks);
     this.currentWeek = weeks;
     this.statusImgUrl = '/assets/images/nobg/'+ this.currentWeek + '.gif';
     this.wholePlannerList = this.userDatas['plannerList'];
     this.familyShares = this.userDatas['familyShares'];

    //  this.getBPlan();
    for(let data of this.wholePlannerList) {
      if (data.week == this.currentWeek) {
        this.weekPlannerList.push(data);
      }
    }

    console.log(this.weekPlannerList);
  }

    weekCalc = function(date){

      var today = new Date();
      var bDate = new Date(date);

      var bDuration = bDate.valueOf() - today.valueOf();


      // duration =  Math.ceil(((((bDate - today)/1000)/60)/60)/24);
      var duration = Math.ceil((((bDuration/1000)/60)/60)/24);
      // console.log(duration);

      // // // $scope.baby.dday = duration;
      var weekOfDay = bDate.getDay();
      duration = Math.ceil(((duration - weekOfDay)/7));

      return 40 - duration ;
    }

  delUser = function(userName){
    console.log(userName);

    var mainUrl = 'https://www.bebe-together.com/resource/admin/deleteUser';

      // let params = new HttpParams()
      // .set('id', id)
      // .set('password', 'tProjects1228');

      if(confirm("해당 회원을 삭제 하시겠습니까?") == true) {
          this.http.get(mainUrl + '?user=' +userName+'&pass=tProject1228')
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

    // let body:any = {"user":userName, "pass": 'tProject1228'};
    // let url = 'https://www.bebe-together.com/resource/admin/deleteUser';
    // let response:any;
    // let headers = new Headers({'Content-Type': 'application/json'});
    // let options = new RequestOptions({headers: this.headers});
    //
    // this.http.get(url, body, options)
    // .subscribe(
    //   (res: Response) => {
    //       const result = res.json();
    //
    //       console.log(result);
    //
    //       if (result.status == "ok") {
    //         console.log("이거 실행되나");
    //       }else {
    //         console.log("에러 발생");
    //       }
    //   });
  }

  addCottonCandy = function(){

    var cottonCandyMount = prompt("추가할 솜사탕 갯수를 입력해주세요 :)", "10");

    if (cottonCandyMount != null) {
      console.log("이거 맞음? " + cottonCandyMount);

      let body:any = { "userId": this.userName, "cotton": cottonCandyMount, "password": 'pave12way' };
      let url = 'https://www.somebby.co.kr/resource/cotton/add';
      let response:any;
      let headers    = new Headers({ 'Content-Type': 'application/json' });
      let options    = new RequestOptions({ headers: this.headers });

      this.http.post(url, body, options)
      .subscribe(
        (res: Response) => {
          const result = res.json();

          console.log(result);

          if (result.status == "ok") {
            console.log("이거 실행되나");
          }else {
            console.log("에러 발생");
          }
      });
      // this.http.post(url, body, options).subscribe((res:Response) => res.json()).subscribe(
      //                      data => { response = data },
      //                      err => console.error(err),
      //                      () => { console.log(response) });
    }
  }

  calcAge = function(birth) {
   var age;

   var today = new Date(),
   tYear = today.getFullYear(),
   tMonth = today.getMonth(),
   tDate = today.getDate();

   var userBirth = new Date(birth),
   uYear = userBirth.getFullYear(),
   uMonth = userBirth.getFullYear(),
   uDate = userBirth.getFullYear();

   age = tYear - uYear + 1;

   return age;
 };


 getBPlan = function(){
   var url = 'https://www.bebe-together.com/resource/get/bPlan';
   let params = new HttpParams()
   .set('id', this.userName)
   .set('week', this.currentWeek)
   .set('type', 'mhealth');

   this.http.get(url , {params})
   .subscribe(
       (res: Response) => {
           const result = res.json();

           console.log(result);
       }
   );
 }

 createNotice = function(){

    let url = 'https://www.somebby.co.kr/resource/notice/create';

    let params = new HttpParams()
    .set('title', this.title)
    .set('content', this.content);

    console.log(this.title, this.content);

    if(confirm("해당 공지사항을 등록 하시겠습니까?") == true) {
        this.http.get(url , {params})
        .subscribe(
            (res: Response) => {
                const result = res;

                console.log(result.status);
                this.title = "";
                this.content = "";
                this.router.navigate(['home/notice/list']);
            }
        );
    }else {
        return
    }
};

  getUserInfo = function(){
    console.log(this.userName);
      var getUrl = 'https://www.bebe-together.com/resource/user/me?userId=ibm2@naver.com';

      this.http.get(this.getUrl)
      .subscribe(
          (res: Response) => {
              const result = res.json();

              // this.lists = result.data;
              // this.lists = result;

              console.log(result);

              // console.log(this.calcAge(this.lists[0].birthDate));

              // this.listSize = this.lists.length;
              //
              // for (let list of this.lists) {
              //   // this.lists[i].push({age: this.calcAge(this.lists[i].birthDate)});
              //   list.age = this.calcAge(list.birthDate);
              // }
          }
      );

      let params = new HttpParams()
      .set('email', this.userName)
          this.http.get(getUrl)
          .subscribe(
          (res: Response) => {
              const result = res.json();

              console.log(result);

              this.userMain = result.data.profileImages[0].url;
              this.userSub = result.data.profileImages[1].url;
              this.userDatas = result.data;

              this.userDatas.age = this.calcAge(this.userDatas.birthDate);
              this.profileImages = this.userDatas.profileImages;
              this.hobbyCollection = this.userDatas.hobbyCollection;
              this.userJob = this.userDatas.job;
              this.userBlood = this.userDatas.bloodType;
              this.userAlcohol = this.userDatas.alcohol;
              this.userSmoking = this.userDatas.smoking;
              this.userReligion = this.userDatas.religion
              this.userCottonCandyAmount = this.userDatas.cottonCandyAmount;

              console.log('이거 실행되니?');
              console.log(this.profileImages);

              if (result.status == 200) {
                  console.log('이거 실행되니?');
              }
          }
      );
  };
}
