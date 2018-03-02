import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})

 export class LayoutComponent implements OnInit {
     constructor(
                private router: Router,
                private route: ActivatedRoute,
     ){}
     
     public disabled = false;
    public status: {isopen: boolean} = {isopen: false};

    public toggled(open: boolean): void {
        console.log('Dropdown is now: ', open);
    }
    public toggleDropdown($event: MouseEvent): void {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
      }
     ngOnInit(): void {}


    doLogOut = function() {
        if(confirm("로그아웃 하시겠습니까?") == true) {
            sessionStorage.removeItem('id');
            sessionStorage.removeItem('pass');
            this.router.navigate(['']);
        }else {
            return
        }
    }
}