import { Component, OnInit} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

declare const $;

@Component({
  templateUrl: 'list.component.html'
})
export class ListComponent implements OnInit {

    private noticeUrl = 'https://www.bebe-together.com/resource/bbs/getNotice';

  lists = [];

public searchString: string;

currentPage:number=1;
listSize = 0;

     constructor(private http: Http,
                 private httpC: HttpClient,
                private router: Router){}

ngOnInit() {
        this.getNotice();
        this.LoadTableData();

        setTimeout(function () {
          $(function () {
            console.log('이게 먼전가?')
         $('#notice').DataTable( {
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
    this.http.get(this.noticeUrl)
    .subscribe(
        (res: Response) => {
            const result = res.json();

            this.lists = result;

            console.log(this.lists);
        }
    );
  }
  //end 로딩 테이블 데이터

get pageProducts(){
   return this.lists.slice((this.currentPage-1)*10,this.currentPage*10);
}

    getNotice = function(){

        this.http.get(this.noticeUrl + '/getAll')
        .subscribe(
            (res: Response) => {
                const result = res.json();

                this.lists = result.data;

                console.log(this.lists);
                this.listSize = this.lists.length;
            }
        );
    };

    delNotice = function(id){

      var mainUrl = 'https://www.bebe-together.com/resource/admin/deleteN';

        // let params = new HttpParams()
        // .set('id', id)
        // .set('password', 'tProjects1228');

        var noticeId = Number(id);
        console.log(typeof(noticeId))

        if(confirm("해당 공지사항을 삭제 하시겠습니까?") == true) {
            this.http.get(mainUrl + '?id=' + noticeId +'&password=tProjects1228')
        .subscribe(
            (res: Response) => {
                const result = res.json();

                console.log(result);

                if (result.status == 'ok') {
                    this.LoadTableData();
                }
            }
        );
        }else {
            return
        }
    };

    goDetail = function(list){
        this.router.navigate(['home/notice/detail'], {queryParams: list});
    };
}
