import { Component, OnInit } from '@angular/core';

import { MainService } from '../services/MainService';
import { Router } from '@angular/router';

@Component({
  selector : 'page-task',
  template : `
            <div id="taskPanel">
              <button id="taskBack" (click)="taskBack()" class="btn btn-info">Cancel</button>
              <p> Task name: </p><input type="text" id="taskName" [disabled]="isInfo" [(ngModel)]="taskName">
              <p> Task date: </p><input type="date" id="taskDate" [disabled]="isInfo" [(ngModel)]="taskDate">
              <p> Task active: </p><input type="checkbox" id="taskActive" [disabled]="isInfo" [checked]="taskActive">
              <p> Task info: </p><textarea id="taskInfo" [disabled]="isInfo" [(ngModel)]="taskInfo"></textarea>
              <button id="taskSave" (click)="showSModal()"*ngIf="showSaveBut" class="btn btn-success">Save</button>
              <button id="taskDel" (click)="showDModal()" *ngIf="showDelBut" class="btn btn-danger">X</button>              
            </div>
            
            <div id="TdelModal" *ngIf="isShowDelModal">
              <p> Are you sure? </p>
              <button (click)="taskD()" class="btn btn-danger" id="mb1"> Yes </button>
              <button (click)="hideDModal()" class="btn btn-success" id="mb2"> No </button>
            </div>

            <div id="saveModal" *ngIf="isShowSavModal">
              <p> Are you sure? </p>
              <button (click)="changeTask()" class="btn btn-danger" id="sb1"> Yes </button>
              <button (click)="hideSModal()" class="btn btn-success" id="sb2"> No </button>
            </div>

            
    `,
    styleUrls : ['./app/styles/task.css']  
})

export class TaskPage implements OnInit{
  isInfo : boolean;
  isShowDelModal : boolean = false;
  isShowSavModal : boolean = false;  

  taskName : string;
  taskDate : string;
  taskActive : boolean = true;
  taskInfo : string;

  showDelBut : boolean = true;
  showSaveBut : boolean = true;
////////////////////////////////////
  constructor (private router : Router,
               private _mSrv : MainService) {};
  // 0 - info
  // 1 - Add
  // 2 - modify
  ngOnInit() {
     let now = new Date();
     let year = now.getFullYear()+"";
     let month =(now.getMonth()+"").length==1?"0"+(now.getMonth()+1):(now.getMonth()+1)+"";          
     let day =(now.getDate()+"").length==1?"0"+(now.getDate()):(now.getDate())+""; 
     if (this._mSrv.taskPageType == 0) {
           this.isInfo = true;
           this.taskName = this._mSrv.tasks[this._mSrv.currentTaskID].name;
           this.taskDate = this._mSrv.tasks[this._mSrv.currentTaskID].date;
           this.taskActive = this._mSrv.tasks[this._mSrv.currentTaskID].active;
           this.taskInfo = this._mSrv.tasks[this._mSrv.currentTaskID].text;
           this.showDelBut = false;
           this.showSaveBut = false;
     };
    if (this._mSrv.taskPageType == 2) {
           this.isInfo = false;
           this.taskName = this._mSrv.tasks[this._mSrv.currentTaskID].name;
           this.taskDate = this._mSrv.tasks[this._mSrv.currentTaskID].date;
           this.taskActive = this._mSrv.tasks[this._mSrv.currentTaskID].active;
           this.taskInfo = this._mSrv.tasks[this._mSrv.currentTaskID].text;
           this.showDelBut = true;
           this.showSaveBut = true;
     };
     if (this._mSrv.taskPageType == 1) {
           this.isInfo = false;
           this.taskDate = year+"-"+month+"-"+day;
           this.showDelBut = false;
           this.showSaveBut = true;
     }                
  };
////////////////////////////////////
  taskBack() {
    this.router.navigateByUrl('/mainPage');
  };

   changeTask() {
    if (this._mSrv.taskPageType == 1){
      this._mSrv.addTask(this.taskName, this.taskDate, this.taskActive, this.taskInfo);
      this.router.navigateByUrl('/mainPage');
    };  
    if (this._mSrv.taskPageType == 2){
      let now = new Date();
      let year = now.getFullYear()+"";
      let month =(now.getMonth()+"").length==1?"0"+(now.getMonth()+1):(now.getMonth()+1)+"";          
      let day =(now.getDate()+"").length==1?"0"+(now.getDate()):(now.getDate())+""; 
      this._mSrv.tasks[this._mSrv.currentTaskID].name = this.taskName;
      this._mSrv.tasks[this._mSrv.currentTaskID].date = this.taskDate;
      this._mSrv.tasks[this._mSrv.currentTaskID].active = this.taskActive;
      this._mSrv.tasks[this._mSrv.currentTaskID].text = this.taskInfo;
      this._mSrv.tasks[this._mSrv.currentTaskID].changeDate = year+"-"+month+"-"+day;
      this._mSrv.tasks[this._mSrv.currentTaskID].textColor = '#F19';
      this.router.navigateByUrl('/mainPage');
    }
  };
  
  showDModal() {     this.isShowDelModal = true;  };
  hideDModal() {     this.isShowDelModal = false;  };

  taskD() {
    
    this._mSrv.delTask(this._mSrv.currentTaskID);
    this.hideDModal();
    this.router.navigateByUrl('/mainPage');
  };

  showSModal() {    this.isShowSavModal = true;  };
  hideSModal() {    this.isShowSavModal = false; };

};   