import { Component, OnInit} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Data } from "../services/data";

declare const $;

@Component({
  templateUrl: 'userList.component.html'
})
export class UserListComponent implements OnInit {

    private userListUrl = 'https://www.bebe-together.com/resource/admin/getAllUser';

  constructor(private http: Http,
                 private httpC: HttpClient,
                private router: Router,
              private data: Data){}

    lists = [];
    listSize = 0;

    ngOnInit() {
        // this.getUserInfo();
        this.LoadTableData();

        setTimeout(function () {
          $(function () {
            console.log('이게 먼전가?')
         $('#userList').DataTable( {
           dom: 'Bfrtip',
           buttons: ['copy', 'csv', 'excel', 'pdf', 'print']
           });
           });
         }, 2000);
        }

        //시작 로딩 테이블 데이터
        LoadTableData() {
          this.http.get(this.userListUrl)
          .subscribe(
              (res: Response) => {
                  const result = res.json();

                  this.lists = result;

                  console.log(this.lists);
              }
          );
        }
        //end 로딩 테이블 데이터

        goDetail = function(list){
          this.data.storage = list;
            this.router.navigate(['home/users/detail'], {queryParams: list});
        };
  }

    //  calcAge = function(birth) {
    //   var age;
    //
    //   var today = new Date(),
    //   tYear = today.getFullYear(),
    //   tMonth = today.getMonth(),
    //   tDate = today.getDate();
    //
    //   var userBirth = new Date(birth),
    //   uYear = userBirth.getFullYear(),
    //   uMonth = userBirth.getFullYear(),
    //   uDate = userBirth.getFullYear();
    //
    //   age = tYear - uYear + 1;
    //
    //   return age;
    // };


    // getUserInfo = function(){
    //     this.http.get(this.userListUrl)
    //     .subscribe(
    //         (res: Response) => {
    //             const result = res.json();
    //
    //             // this.lists = result.data;
    //             this.lists = result;
    //
    //             console.log(result);
    //             console.log(this.lists);
    //
    //             // console.log(this.calcAge(this.lists[0].birthDate));
    //
    //             // this.listSize = this.lists.length;
    //             //
    //             // for (let list of this.lists) {
    //             //   // this.lists[i].push({age: this.calcAge(this.lists[i].birthDate)});
    //             //   list.age = this.calcAge(list.birthDate);
    //             // }
    //         }
    //     );
    // };

    // get pageProducts(){
    //    return this.lists.slice((this.currentPage-1)*10,this.currentPage*10);
    // }
