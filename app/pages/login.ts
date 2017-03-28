import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MainService } from '../services/mainService';
import { LoginService } from '../services/loginService';

@Component({
  selector : 'page-login',
  template : `    
    <div id="loginForm">
      <input type="text" id="loginName" required placeholder="Your Login" [(ngModel)]="userLogin" (click)="lNChange()"/>
      <input type="password" id="loginPass" required placeholder="Your password" [(ngModel)]="userPassword" (click)="lNChange()" />     
      <p id="errMessage">{{loginError}}</p>   
      <button class="btn btn-good" id="loginBut" (click)="toLog()">Login</button>
      <button class="btn btn-warning" id="regBut" (click)="toReg()" [disabled] = "true">Reg me</button> 
    </div>                      
    `,
    styleUrls : ['./app/styles/login.css']    
})
export class LoginPage {
  constructor(private router : Router, 
              private _mService : MainService,
              private _lService : LoginService
  ) { }; 
  userLogin : string;
  userPassword : string;

  loginError : string;
  
  toLog() { 
    if (this._lService.toLog(this.userLogin,this.userPassword)/1 > 1){
            this._mService.logInUserName = this.userLogin;
            this.router.navigateByUrl('/mainPage');  
    }
    else if (this._lService.toLog(this.userLogin,this.userPassword)/1==1){
          this.loginError = "Wrong password";
        }
   else {
        this.loginError = "Wrong user";
     }     
   };

  toReg() {
    this._mService.tryToReg = true;
    this.router.navigateByUrl('/regPage');  
  }  

  lNChange() {
    this.loginError=null;   
  };

};
