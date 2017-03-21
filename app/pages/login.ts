import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MainService } from '../services/mainService';

@Component({
  selector : 'page-login',
  template : `    
    <div id = "loginForm">
      <input  type  = "text"         id = "loginName"    required   placeholder = "Your Login"      [(ngModel)] = "userLogin" />
      <input  type  = "password"     id = "loginPass"    required   placeholder = "Your password"   [(ngModel)] = "userPassword" />        
      <button class = "btn btn-good"    id = "loginBut" (click) = "toLog()" > Login  </button>
      <button class = "btn btn-warning" id = "regBut"   (click) = "toReg()" > Reg me </button> 
    </div>                      
    `,
    styleUrls : ['./app/styles/login.css']    
})
export class LoginPage {
  constructor(private router : Router, 
              private _mService : MainService 
  ) { }; 
  userLogin : string;
  userPassword : string;

  toLog(){  
    if((this._mService.allowLogin.indexOf(this.userLogin) != -1 ) &&
        (this._mService.allowPassword[ this._mService.allowLogin.indexOf(this.userLogin) ] == this.userPassword ) ){
          this.router.navigateByUrl('/mainPage');
          this._mService.logInUserName = this.userLogin;
        }   
    };

  toReg(){
    this.router.navigateByUrl('/regPage');  
  }  
};
