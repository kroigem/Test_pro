import { Component,OnInit } from '@angular/core';

import { MainService } from '../services/mainService';

import { Router } from '@angular/router';

@Component({
  selector : 'page-add',
  template : `
          <div id="addPanel" >    
            <p id="ai0_0" class="ai0"> TaskName: </p>
                      <input type="text" id="ai1_0" class="ai1" [(ngModel)]="addName" required maxlength = "20">
            <p id="ai0_1" class="ai0"> TaskDate: </p>
                      <input type="date" id="ai1_1" class="ai1" required [(ngModel)]="addDate"/>
            <p id="ai0_2" class="ai0"> TaskActive: </p>  
                      <input type="checkbox" id="ai1_2" class="ai1" [(ngModel)]="addActive"/>
            <p id="ai0_3" class="ai0"> TaskInfo: </p>
                      <textarea id="ai1_3" class="ai1" [(ngModel)]="addInfo"></textarea>
            <button class="btn btn-alert" id="aiBut" (click)="aiClick()" [disabled]="!addName"> Add task </button>
            <button class="btn btn-info"  id="aiBack" (click)="aiBack()"> Back </button>
          </div>
    `,
    styleUrls : ['/styles/aI.css']  
})
export class addInf implements OnInit {
  addName   : string  = "";
  addDate   : string  = "";
  addActive : boolean = true;
  addInfo   : string  = "";

  ngOnInit() {
     if (this._mService.logInUserName == ""){
            this.router.navigateByUrl('/');
     }  
  };
  constructor(private _mService : MainService, 
              private router    : Router            
  ) {}; 

  aiClick() {    
        this._mService.tasks.push(this._mService.nextIndex + "@" + 
                                  this.addName + "@" + 
                                  this.addDate + "@" + 
                                  this.addActive + "@" + 
                                  this.addInfo);
        this._mService.nextIndex ++;  
        this.router.navigateByUrl('/mainPage');                                       
  };  
    aiBack() {
    this.router.navigateByUrl('/mainPage');
  };
};