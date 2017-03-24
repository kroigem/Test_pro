import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MainService } from '../services/mainService';

@Component({
  selector : 'page-main',
  template : `    
            <header>
                <h1 id="q1"> TaskPage </h1>
                <p id="userLogName">Logined in as: {{userName}}</p>
                <button class="btn btn-info" id="logOut" (click)="logOut()"> Log out  </button>
            </header>
            <button class="btn btn-success" (click)="addTask()" id="addTask"> Add task </button>
            <table>
            <tr ><th class="tableHead"> TaskName </th>
                 <th class="tableHead"> Date </th>
                 <th class="tableHead"> isActive </th>
                 <th class="tableHead"> Info </th>
            </tr>      
              <tr *ngFor="let c of tasksDash">
              <th> {{c[1]}} </th>
              <th> {{c[2]}} </th>
              <th><input type="checkbox" checked={{c[3]}}/></th>
              <th><button class="btn btn-info" (click)="infoClick($event)" id="{{c[0]}}"> Info </button></th>
            </tr>       
            </table>   
    `,
  styleUrls : ['/styles/main.css'] 
})
export class MainPage implements OnInit {
    tasksDash : any[][] = [];
    userName  : string;

    constructor(private _mService : MainService,
                private router    : Router                
    ) {};

    ngOnInit() {        
        if (this._mService.logInUserName == ""){
            this.router.navigateByUrl('/');
        }
        else {
            for (let i = 0; i < this._mService.tasks.length; i++){
              if (this._mService.tasks[i] != "none"){
                  this.tasksDash.push(this._mService.tasks[i].split('@'));  
              }        
            }
            this.userName = this._mService.logInUserName;
        };
    };

    infoClick($event : any) {        
        this._mService.taskInfoId = ($event.target.id);           
        this.router.navigateByUrl('/infoTask');         
    };

    addTask() {
        this.router.navigateByUrl('/addTask');
    };

    logOut() {
        this.userName = "";
	this.tryToReg = false;
        this.router.navigateByUrl('/')
    };
}
