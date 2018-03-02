import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';

import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    adminId = '';
    adminPass = '';

  constructor(
    private router:Router,
    private user:UserService) { }

  ngOnInit() {

      var savedId = sessionStorage.getItem('id');
      var savedPass = sessionStorage.getItem('pass');

      this.checkIsLoggedIn();
  }

    checkIsLoggedIn = function(){
        if(this.savedId == 'admin' && this.savedPass == 'tProject1228'){

          console.log('실행 안되나');
         this.router.navigate(['/home']);
      }
    };

    loginUser(){

        sessionStorage.setItem('id', this.adminId);
        sessionStorage.setItem('pass', this.adminPass);

        if(this.adminId == 'admin' && this.adminPass == 'tProject1228') {
            this.user.setUserloggedIn();
            this.router.navigate(['/home']);
        }else {
          alert("아이디 혹은 비밀번호를 확인하세요.")
        }
    }
}
