import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../services/LoginService';
import { MainService } from '../services/MainService';

@Component({
  selector : 'page-login',
  templateUrl : `./app/templates/loginPage.html`,
  styleUrls : ['./app/styles/login.css']    
})

export class LoginPage {
/////////////////////////////////////////////////////
    userLogin : string = "";
    userPassword : string = "";
    loginError : string = "";
////////////////////////////////////////////////////
    constructor (private _lSrv : LoginService,      
                 private _mSrv : MainService,           
                 private router : Router
                 ) {};
////////////////////////////////////////////////////
    toLog() {       
        let rez : number = this._lSrv.currentUser.allowLog(this.userLogin,this.userPassword);        
        if ( rez == 2) {
             this._mSrv.loginedUser = this.userLogin;
             this.router.navigateByUrl('/mainPage');
        }
        if (rez == 1) { this.loginError = " wrong password";    }
        if (rez == 0) { this.loginError = "wrong login";        }
    };

    toKLog(event : any) {
      if (event.keyCode == 13){ this.toLog(); 
      }
      else {
        this.loginError = "";
      }
    };
    
    GoMainPage() {
      this.router.navigateByUrl('/');
    }
};
