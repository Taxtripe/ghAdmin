import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

declare const $;

@Component({
  templateUrl: 'list.component.html'
})
export class ListComponent implements OnInit{
  constructor(private http: Http,
                 private httpC: HttpClient,
                private router: Router){}

    private bbsUrl = 'https://www.bebe-together.com/resource/bbs/getAll';

    lists = [];
    listSize = 0;

    ngOnInit(){
        this.getEvent();

        setTimeout(function () {
          $(function () {
            console.log('이게 먼전가?')
         $('#bbs').DataTable( {
           dom: 'Bfrtip',
           buttons: [
               'copy', 'csv', 'excel', 'pdf', 'print'
           ]
           } );
           });
         }, 1000);
    }

    getEvent = function(){

        this.http.get(this.bbsUrl)
        .subscribe(
            (res: Response) => {
                const result = res.json();

                console.log(result);
                this.lists = result;

                console.log(this.lists);
            }
        );
    };

    detail = function(id) {
      this.router.navigate(['home/event/detail'], {queryParams: id});
    }
}
