import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {ActivatedRoute, Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';


@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

    name = 'tax';

    private userListUrl = 'https://www.bebe-together.com/resource/admin/getAllUser';

    private bbsUrl = 'https://www.bebe-together.com/resource/bbs/getAll';

    bbsLists = [];
    bbsNormalLists = [];
    bbsListSize = 0;
    currentPage:number=1;

    wholeMemberLists = [];
    momLists = [];
    dadLists = [];
    etcLists = [];

    wholeMemerCount = 0;
    momMemberCount = 0;
    dadMemberCount = 0;
    etcMemberCount = 0;

    momPercent = 0;
    dadPercent = 0;
    etcPercent = 0;

    wholeBabyLists = [];
    boyBabyLists = [];
    girlBabyLists = [];
    etcBabyLists = [];
    yetBabyLists = [];

    wholeBabyCount = 0;
    boyBabyCount = 0;
    girlBabyCount = 0;
    etcBabyCount = 0;
    yetBabyCount = 0;

    boyBabyPercent = 0;
    girlBabyPercent = 0;
    etcBabyPercent = 0;
    yetBabyPercent = 0;

  constructor(
    private user:UserService,
  private router: Router,
  private route: ActivatedRoute,
private http: Http,
private httpC: HttpClient
) { }

  ngOnInit() {
      this.name = this.user.userName;

      this.route
        .queryParams
        .subscribe(params => {
//            let code = params['code'];
//            let userEmail = params['email'];
          console.log('afdsasdf')
          console.log(params);
        });

        this.getWholeUser();
  }

  getEvent(){
    this.http.get(this.bbsUrl)
    .subscribe(
        (res: Response) => {
            const result = res.json();

            console.log(result);
            this.bbsLists = result;

            console.log(this.bbsLists);

            for(let list of this.bbsLists){
              if(list.type == 'normal'){
                console.log(this.weekCalc(list.date));

                let weekDif = this.weekCalc(list.date);

                if(weekDif <=0){
                  this.bbsNormalLists.push(list);
                }

              }
            }

            this.bbsListSize = this.bbsNormalLists.length;
        }
    );
  }

  weekCalc = function(date){

    var today = new Date();
    var bDate = new Date(date);

    var bDuration = today.valueOf() - bDate.valueOf();


    // duration =  Math.ceil(((((bDate - today)/1000)/60)/60)/24);
    var duration = Math.ceil((((bDuration/1000)/60)/60)/24);
    // console.log(duration);

    // // // $scope.baby.dday = duration;
    var weekOfDay = bDate.getDay();
    duration = Math.ceil(((duration - weekOfDay)/7));

    return duration ;
  }

  get pageProducts(){
       return this.bbsNormalLists.slice((this.currentPage-1)*10,this.currentPage*10);
    }

  getWholeUser(){
    this.http.get(this.userListUrl)
    .subscribe(
        (res: Response) => {
            const result = res.json();

            this.wholeMemberLists = result;
            this.wholeMemerCount = this.wholeMemberLists.length;

            //엄마/아빠/etc 회원 수 구하기
            for(let data of this.wholeMemberLists) {
              if (data.role == 'mom') {
                this.momLists.push(data);
              }else if (data.role == 'dad') {
                this.dadLists.push(data);
              }else {
                this.etcLists.push(data);
              }

              if(data['babyList'].length != 0){
                this.wholeBabyLists.push(data['babyList']);
              }
            }

            this.momMemberCount = this.momLists.length;
            this.dadMemberCount = this.dadLists.length;
            this.etcMemberCount = this.etcLists.length;

            //애기 비율 구하기
            this.wholeBabyCount = this.wholeBabyLists.length;

            for(let baby of this.wholeBabyLists) {
              if(baby[0].gender == 'boy'){
                this.boyBabyLists.push(baby[0]);
              }else if(baby[0].gender == 'girl') {
                this.girlBabyLists.push(baby[0]);
              }else if(baby[0].gender == 'etc') {
                this.etcBabyLists.push(baby[0]);
              }else {
                this.yetBabyLists.push(baby[0]);
              }
            }

            this.wholeBabyCount = this.wholeBabyLists.length;
            this.boyBabyCount = this.boyBabyLists.length;
            this.girlBabyCount = this.girlBabyLists.length;
            this.etcBabyCount = this.etcBabyLists.length;
            this.yetBabyCount = this.yetBabyLists.length;

            console.log(this.wholeBabyCount);
            console.log(this.boyBabyCount);
            console.log(this.etcBabyCount);
            console.log(this.yetBabyCount);

            this.momPercent = Math.floor((this.momMemberCount / this.wholeMemerCount)*100);
            this.dadPercent = Math.floor((this.dadMemberCount / this.wholeMemerCount)*100);
            this.etcPercent = Math.floor((this.etcMemberCount / this.wholeMemerCount)*100);

            this.boyBabyPercent = Math.floor((this.boyBabyCount / this.wholeBabyCount)*100);
            this.girlBabyPercent = Math.floor((this.girlBabyCount / this.wholeBabyCount)*100);
            this.etcBabyPercent = Math.floor((this.etcBabyCount / this.wholeBabyCount)*100);
            this.yetBabyPercent = Math.floor((this.yetBabyCount / this.wholeBabyCount)*100);

            this.getEvent();
        }
    );
  }
}
