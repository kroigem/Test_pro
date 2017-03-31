import { Component,OnInit,OnChanges } from '@angular/core';
import { Router } from '@angular/router';

import { MainService } from '../services/MainService';

@Component({
  selector : 'page-main',
  template : `    
            <header>
              <p id="mainHName">User : {{_mSrv.loginedUser}} </p>
              <button id="mainHBut" class="btn btn-info" (click)="logOut()"> Log out </button>
            </header>
                         
            <button  class="mainAddTask btn btn-info" (click)="toTask(1,$event)" id="0" *ngIf="!empty"> Add task </button> 
            
            <table>
              <tr id="tabHead">
                <th> Name </th> 
                <th> Date </th>
                <th> Active </th>
                <th> Info </th>
                <th> Change </th>
                <th> Delete </th>
              <tr>
              <tr *ngFor="let c of _mSrv.tasks" id="{{c.id}}" (click)="toTask(0,$event)">
                <th [style.color]="c.textColor">{{c.name}}</th>
                <th>{{c.date}}</th>
                <th><input type="checkbox" checked={{c.active}}/></th>
                <th><button class="btn btn-info" title="Последнее изменение: \n{{c.changeDate}}" (click)="toTask(0,$event)" id="{{c.id}}">Info</button></th>
                <th><button class="btn btn-warning" (click)="toTask(2,$event)" id="{{c.id}}">Change</button></th>
                <th><button class="btn btn-danger" (click)="showModal($event)" id="{{c.id}}" >X </button></th>
              </tr>   
              <button *ngIf="empty" class="btn btn-info" (click)="toTask(1,$event)"> Add first task </button>             
            </table>            
          
            <div id="delModal" *ngIf="isShowDelModal">
              <p> Do you want to delete this? </p>
              <button (click)="delTask()" id="mb1" class="btn btn-danger"> Yes </button>
              <button (click)="hideModal()" id=mb2 class="btn btn-success"> No </button>
            </div>           
            
    `,
  styleUrls : ['./app/styles/main.css'] 
})
export class MainPage implements OnInit { 
  isShowDelModal : boolean = false;
  empty : boolean = false;
  deleteId : number = -1;
  isShowTI : boolean = true;
  
//////////////////////////////////////// 
  constructor (private _mSrv  : MainService,
               private router : Router
               ) {};
  ngOnInit() {
    if (this._mSrv.loginedUser == "") {
      this.router.navigateByUrl('');     
    };
  };  
////////////////////////////////////////  

  logOut() {
    this._mSrv.loginedUser = "";
    this.router.navigateByUrl('');
  };
// 0 - info
// 1 - Add
// 2 - modify
  toTask(typ : number,event : any) {
    if (this.isShowTI) {      
      this._mSrv.taskPageType = typ;
      if (typ !=1) {this._mSrv.currentTaskID = event.target.id/1};
      this.router.navigateByUrl('/taskPage');
    }
  };

  delTask() {       
    this._mSrv.delTask(this.deleteId); 
    this.hideModal(); 
    this.empty = this._mSrv.tasks.length == 0 ? true : false;
    this.isShowTI = true; 
  };

  showModal(event : any) {  
      this.isShowTI = false; 
      this.deleteId = event.target.id/1;
      this.isShowDelModal = true;  
  };

  hideModal() {     
    this.isShowDelModal = false;  
    this.isShowTI = true;
  };
};
