import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../services/LoginService';
import { MainService } from '../services/MainService';

@Component({
  selector : 'page-login',
  template : `    
              <header>
                <img src="app/styles/pics/load.png">
                <p> Регистрация </p>
                <p id="hp1" (click)="GoMainPage()"> Выполнить вход </p>    
              </header>  
              
              <h1>Выполнить вход </h1>
              <h4>Используйте локальную учетную запись для входа </h4>       
              <div id="loginForm">    
                <p id="hp0">Адрес электронной почты </p>
                <input type="text" id="loginName" required placeholder="Your Login" [(ngModel)]="userLogin" (keydown) ="toKLog($event)" />
                <p> Пароль </p>
                <input type="password" id="loginPass" required placeholder="Your password" [(ngModel)]="userPassword" (keydown) ="toKLog($event)"/>                  
                <p id="errMessage">{{loginError}}</p>  
                <button id = "loginBut" class="btn btn-primary" [disabled]="!userLogin&&!userPassword" (click)="toLog()"> Выполнить вход </button>
              <button class="btn btn-link" id="regBut"> Регистрация нового пользователя </button>                                     
              
              </div>                 
              <footer>© 2017 -.Net Team </footer>      
    `,
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
