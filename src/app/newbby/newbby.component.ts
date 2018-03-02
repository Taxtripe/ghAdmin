import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';



@Component({
    templateUrl: 'newbby.component.html'
})
 export class NewbbyComponent implements OnInit {

     private newbbyUrl = 'https://www.somebby.co.kr/resource/admin';

    lists = [];

    public searchString: string;


    currentPage:number=1;
    listSize = 0;

     constructor(private http: Http,
                private router: Router){}

     ngOnInit() {
        this.http.get(this.newbbyUrl + '/get/waiting')
        .subscribe(
            (res: Response) => {
                const result = res.json();

                this.lists = result.data;

                console.log(this.lists);
                this.listSize = this.lists.length;
            }
        );
  }

goToAuth = function(list){
    console.log(list);
    this.router.navigate(['/home/auth'], {queryParams: list});
};

get pageProducts(){
       return this.lists.slice((this.currentPage-1)*10,this.currentPage*10);
    }

}
