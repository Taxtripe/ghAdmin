import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
    
    private isUserLoggedIn = false;
    public userName;

  constructor() {
    this.isUserLoggedIn = false;
  }

    setUserloggedIn(){
        this.isUserLoggedIn = true;
        this.userName = '관리자';
    }

    getUserLoggedIn(){
        return this.isUserLoggedIn;
    }
}
