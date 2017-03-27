import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MainService } from '../services/mainService';
import { LoginService } from '../services/loginService';

@Component({
    selector : 'page-login',
    template : `
                <div id="regPanel">
                    <p id="regMessage"> {{errMessage}} </p>
                    <p id="regNameLabel"> User name </p>
                    <input type="text" id="regName" required [(ngModel)]="regName" (click)="rnChange()">
                    <p id="regPassLabel"> User password </p>
                    <input type="password" id="regPass" required [(ngModel)]="regPass" (click)="rnChange()"> 
                    <p id="regPassLabel2"> Repeat password </p>
                    <input type="password" id="regPass2" required [(ngModel)]="regPass2" (click)="rnChange()">
                    <button class="btn btn-info" id="newRegBut" (click)="tryReg()" [disabled] = "!regName"> RegMe </button>
                    <button class="btn btn-primary" (click) = "back()">Back</button>
                </div>
              `,
    styleUrls : ['./app/styles/reg.css']          
})

export class Registaration implements OnInit {
  
    regName    : string;
    regPass    : string;
    regPass2   : string;
    errMessage : string;
   
   
    passEqual  :boolean = false;


    constructor (private _lService : LoginService, 
                 private _mService : MainService, 
                    private router : Router
    ) {};

    ngOnInit() {
         if (this._mService.tryToReg == false){
            this.router.navigateByUrl('/');
        }
    };
 
    tryReg() {        
        if (this.regPass == this.regPass2){      
            this.passEqual = true;                   
            if (this._lService.allowLogin.indexOf( this.regName) == -1){                    
                    this._lService.allowLogin.push( this.regName);
                    this._lService.allowPassword.push( this.regPass);                    
                    this.router.navigateByUrl( '/mainPage');
            }
            else {
                this.errMessage = "Login isnt allowed";    
            }
        }
        else {
             this.errMessage = "Pass retype wrong";    
        }
    };

    back() {
        this.router.navigateByUrl('/');
    };

    rnChange() {
        this.errMessage = null;
    };
}