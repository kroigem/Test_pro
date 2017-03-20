import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../services/LoginService';

@Component({
  selector: 'page-login',
  template: `    
    <div id="loginForm">
      <input type="text" 
        required 
        placeholder="Your Login" 
        id="loginName" 
        [(ngModel)]="userLogin"/>
      <input type="password" 
        required 
        placeholder="Your password" 
        id="loginPass"
        [(ngModel)]="userPassword"
        />        
      <button class="btn btn-good" 
        id="loginBut" 
        (click)="toLog()">
        Login
      </button> 
    </div>                      
    `,
    styleUrls:['./app/styles/login.css'],
    providers:[LoginService]
})
export class LoginPage {
  constructor(private router: Router,private _lService:LoginService) { }; 
  userLogin:string;
  userPassword:string;

  toLog(){    
    if((this.userLogin==this._lService.allowLogin)&&(this.userPassword==this._lService.allowPassword)){
      this.router.navigateByUrl('/mp');
      this._lService.logInUserName=this.userLogin;
    }   
  }
}
