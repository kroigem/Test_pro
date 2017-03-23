import { Component,OnChanges } from '@angular/core';
import { Router } from '@angular/router';

import { MainService } from '../services/mainService';

@Component({
    selector : 'page-login',
    template : `
                <div id="regPanel">
                    <p id="regNameLabel"> User name </p>
                    <input type="text" id="regName" required [(ngModel)]="regName">
                    <p id="regPassLabel"> User password </p>
                    <input type="password" id="regPass" required [(ngModel)]="regPass"> 
                    <p id="regPassLabel2"> Repeat password </p>
                    <input type="password" id="regPass2" required [(ngModel)]="regPass2">
                    <button class="btn btn-info" id="newRegBut" (click)="tryReg()"> RegMe </button>
                </div>
              `,
    styleUrls : ['./app/styles/reg.css']          
})

export class Registaration implements OnChanges {
  
    regName  : string;
    regPass  : string;
    regPass2 : string;
    
    ngOnChanges() {};
    
    constructor (private _mService : MainService, 
                 private router : Router
     ) {};

    tryReg() {        
        if (this.regPass == this.regPass2){                         
            if (this._mService.allowLogin.indexOf( this.regName) == -1){                    
                    this._mService.allowLogin.push( this.regName);
                    this._mService.allowPassword.push( this.regPass);
                    alert ( "Registaration OK!");
                    this.router.navigateByUrl( '/mainPage');
            }
            else {
                alert ( "Registaration failed");    
            }
        }
    };
}