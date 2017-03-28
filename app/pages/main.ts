import { Component,OnInit,OnChanges } from '@angular/core';
import { Router } from '@angular/router';

import { MainService } from '../services/mainService';
import { LoginService } from '../services/loginService';

@Component({
  selector : 'page-main',
  template : `    
            <header>
                <h1 id="q1"> TaskPage </h1>
                <p id="userLogName">Logined in as: {{userName}}</p>
                <button class="btn btn-info" id="logOut" (click)="logOut()"> Log out  </button>
            </header>
            <button class="btn btn-success" (click)="addTask()" id="addTask" *ngIf="anyTask"> Add task </button>
            <table>
            <tr><th class="tableHead"> TaskName </th>
                 <th class="tableHead"> Date </th>
                 <th class="tableHead"> isActive </th>
                 <th class="tableHead"> Info </th>
                 <th class="tableHead"> </th>
            </tr>     

            <tr>
                <div *ngIf="!anyTask">
                    <button class="btn btn-success" (click)="addTask()" id="addFTask"> Add first task </button>
                </div>
            </tr>

            <tr *ngFor="let c of tasksDash" (click)="trClick($event)" id="tr+{{c[0]}}">
              <th> {{c[1]}} </th>
              <th> {{c[2]}} </th>
              <th><input type="checkbox" checked={{c[3]}} [disabled] = "true"/></th>
              <th><button class="btn btn-info" (click)="infoClick($event)" id="{{c[0]}}"> Info </button></th>
              <th><button class="btn btn-danger" title="delete task" (click)="showModal($event)" id="d+{{c[0]}}"> X </button></th>
            </tr>               
            
            <div *ngIf="isShowModal" id="delModal">
                <p> Are you sure ? </p>
                <button class="btn btn-danger" (click)="infoDel()"> YES </button>
                <button class="btn btn-success" (click)="hideModal()"> NO </button>
            </div>

            </table>   
    `,
  styleUrls : ['/styles/main.css'] 
})
export class MainPage implements OnInit,OnChanges {
    tasksDash : any[][] = [];
    userName  : string; 

    anyTask : boolean = true;

    isShowModal : boolean = false;
    isShowInfo : boolean = true;

    delTaskId : number;    

    constructor(private _mService : MainService,
                private _lService : LoginService,
                private router    : Router                
    ) {};

    ngOnInit() {         
        if (this._mService.logInUserName == ""){
            this.router.navigateByUrl('/');
        }
        else {
            for (let i = 0; i < this._mService.tasks.length; i ++){
              if (this._mService.tasks[i] != "none" ) {
                  this.tasksDash.push(this._mService.tasks[i].split('@') );           
              }        
            }
              if (this.tasksDash.length == 0) {
                    this.anyTask = false;
              }
              else {
                    this.anyTask = true;
              }    
            this.userName = this._mService.logInUserName;
        };
    };
    
    ngOnChanges() {
        
    }
    infoClick($event : any) {        
        this._mService.taskInfoId = ($event.target.id);     
        this._mService.showType = true;      
        this.router.navigateByUrl('/infoTask');         
    };

    addTask() {
        this._mService.showType = false;      
        this.router.navigateByUrl('/infoTask');
    };

    logOut() {
        this.userName = "";	        
        this._mService.logInUserName = null;        
        this.router.navigateByUrl('/')        
    };

    showModal(event : any) {
         this.isShowInfo = false;
         this.isShowModal = true;
         this.delTaskId = event.target.id.split('+')[1] / 1;
    }

    infoDel() {       
        let tempX = (this.delTaskId/1); 
        
        this._mService.tasks[tempX] = "none";
        this._mService.taskCount -= 1;

       for (let i = 0; i<this.tasksDash.length; i++){
            if (this.tasksDash[i][0] == tempX){
                this.tasksDash.splice(i,1);                
            }
        }     
        if (this.tasksDash.length ==0) {
            this.anyTask = false;
        }
        else {
             this.anyTask = true;
        };
        this.isShowInfo = true;
        this.isShowModal = false;
    };
    trClick(event : any) {        
        if (this.isShowInfo){
        this._mService.taskInfoId = event.path[1].id.split('+')[1];         
        this._mService.showType = true;    
        this.router.navigateByUrl('/infoTask');  
        } 
    }
    hideModal() {
        this.isShowInfo = true;
        this.isShowModal = false;
    }
}
