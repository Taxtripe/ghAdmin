import { Component, ElementRef, OnInit} from '@angular/core';

import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

declare const $;

@Component({
  templateUrl: 'add.component.html',
    providers: []
})
export class AddComponent implements OnInit {
  title:string = "";
  private addMainUrl = 'https://www.bebe-together.com/resource/admin/getBadd';

  lists = [];
  listSize = 0;

  constructor( private http: Http,
               private router: Router,
                private elem: ElementRef
               ){}

 ngOnInit() {
   this.LoadTableData();

   setTimeout(function () {
     $(function () {
       console.log('이게 먼전가?')
    $('#add').DataTable( {
      dom: 'Bfrtip',
      buttons: [
          'copy', 'csv', 'excel', 'pdf', 'print'
      ]
      } );
      });
    }, 1000);
   }

   //시작 로딩 테이블 데이터
   LoadTableData() {
     this.http.get(this.addMainUrl)
     .subscribe(
         (res: Response) => {
             const result = res.json();

             this.lists = result;

             console.log(this.lists);
         }
     );
   }
   //end 로딩 테이블 데이터
}
