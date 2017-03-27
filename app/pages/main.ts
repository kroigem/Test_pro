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
            <tr ><th class="tableHead"> TaskName </th>
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

            <tr *ngFor="let c of tasksDash">
              <th> {{c[1]}} </th>
              <th> {{c[2]}} </th>
              <th><input type="checkbox" checked={{c[3]}}/></th>
              <th><button class="btn btn-info" (click)="infoClick($event)" id="{{c[0]}}"> Info </button></th>
              <th><button class="btn btn-danger" title="delete task" (click)="infoDel($event)" id="d+{{c[0]}}"> X </button></th>
            </tr>               
            
            </table>   
    `,
  styleUrls : ['/styles/main.css'] 
})
export class MainPage implements OnInit,OnChanges {
    tasksDash : any[][] = [];
    userName  : string; 

    anyTask : boolean = true;

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
        this.router.navigateByUrl('/infoTask');         
    };

    addTask() {
        this.router.navigateByUrl('/addTask');
    };

    logOut() {
        this.userName = "";	        
        this._mService.logInUserName = null;        
        this.router.navigateByUrl('/')        
    };

    infoDel($event : any) {       
        let tempX = ($event.target.id.split('+')[1] / 1); 

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
        }
    };
}
