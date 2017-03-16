import { Component } from '@angular/core';
import {LoginData} from '../services/login.service';

@Component({
  selector: 'login-app',
  template: `
             <button class="btn btn-primary" id="loginBut" *ngIf="!isUserLogin()" (click)="LogOut()">LogOut,{{currentUser}}!</button> 
             <div id="loginForm" *ngIf="isUserLogin()">
                <input                     
                    type="text"                 
                    id="loginName"
                    required  
                    [(ngModel)]="lName"    
                                                                 
                    >
                <input type="password"
                    id="loginPass"
                    [(ngModel)]='lPass'
                    required
                    
                    >

                <button class="btn btn-danger" 
                    id="loginBut1"
                    [disabled]="!(lName&&lPass)"
                    (click)="isAllowedToLogin()"
                    >Login</button>
             </div>                                              
            `,
  styleUrls: ['../styles/login.css'],
  providers:[LoginData]
})
export class LoginAC {
    constructor(private _loginService:LoginData){};
    lName:string;
    lPass:string;

    currentUser:string;

    name:string="";
    isSetData(){
       if(this.name.length==0){       return true;}
    }
    isAllowedToLogin(){
        if ((this.lName==this._loginService.allowLogin)&&(this.lPass==this._loginService.allowPassword)){
            console.log("Welcome "+this.lName+" !");
            this._loginService.currentUser=this.lName; 
            this.currentUser=this._loginService.currentUser;         
        }
        else {
            alert ("Access not allowed!")
        }
    }
    isUserLogin(){
        if (this._loginService.currentUser!=""){return false;}
        else {return true;}
    }
    LogOut(){
        this._loginService.currentUser="";
    }
}
