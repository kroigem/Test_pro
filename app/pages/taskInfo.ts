import { Component, OnInit } from '@angular/core';

import { MainService } from '../services/mainService';

import { Router } from '@angular/router';

@Component({
  selector : 'page-task',
  template : `
           <div id="taskPanel">    
              <button class="btn btn-danger" id="delTask" (click)="delTask()"> Delete task </button>
              <p id="ti0_0" class="ti0"> TaskName: </p>
                        <p id="ti1_0" class="ti1" readonly> {{taskName}} </p>
              <p id="ti0_1" class="ti0"> TaskDate: </p>
                        <input type="date" id="ti1_1" class="ti1" value="{{taskDate}}" [disabled]="true">
              <p id="ti0_2" class="ti0"> TaskActive: </p>  
                        <input type="checkbox" id="ti1_2" class="ti1" [checked]="taskActive" [disabled] = "true" >
              <p id="ti0_3" class="ti0"> TaskInfo: </p>
                        <textarea id="ti1_3" class="ti1" readonly> {{taskInfo}} </textarea>
              <button class="btn btn-alert" id="tiBut" (click)="tiClick()"> OK </button>
              <button class="btn btn-info"  id="tIBack" (click)="tiBack()"> Back </button>
            </div>
    `,
    styleUrls : ['/styles/taskI.css']  
})

export class taskInf implements OnInit{
  constructor(private _mService : MainService, private router : Router) {};
  taskName   : string  = "";
  taskDate   : string  = "";
  taskActive : boolean = false;
  taskInfo   : string  = "";

  tempS : string[];

  ngOnInit() {     
      if (this._mService.logInUserName == ""){
          this.router.navigateByUrl('/');
      }
      else { 
          this.tempS      = this._mService.tasks[this._mService.taskInfoId/1].split('@');
          this.taskName   = this.tempS[1];
          this.taskDate   = this.tempS[2];
          this.taskActive = this.tempS[3] == "true" ? true : false;
          this.taskInfo   = this.tempS[4];
      }
  };

  tiClick() {   
    this.router.navigateByUrl('/mainPage'); 
  };

  delTask() {    
    this._mService.tasks[this._mService.taskInfoId/1] = "none";
    this.router.navigateByUrl('/mainPage');    
  };

  tiBack() {
    this.router.navigateByUrl('/mainPage');
  };
};