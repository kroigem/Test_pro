import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';


import {MainService} from '../services/mainService';
import {LoginService} from '../services/loginService';

@Component({
  selector: 'page-main',
  template: `    
            <h1 id="q1">TaskPage</h1>
            <button class="btn btn-success" (click)="addTask()">Add task</button>
            <table>
            <tr ><th class="tableHead">TaskName</th>
                 <th class="tableHead">Date</th>
                 <th class="tableHead">isActive</th>
                 <th class="tableHead">Info</th>
            </tr>      
              <tr *ngFor="let c of tasksDash">
              <th>{{c[1]}}</th>
              <th>{{c[2]}}</th>
              <th><input type="checkbox" checked={{c[3]}}/></th>
              <th><button class="btn btn-info" (click)="infoClick($event)" id="{{c[0]}}">Info</button></th>
            </tr>       
            </table>   
    `,
  styleUrls:['/styles/main.css'],
  providers:[LoginService]  
})
export class MainPage implements OnInit {
    tasksDash:any[][]=[];
    constructor(private _lService:LoginService,
                private router: Router,
                private _mService:MainService){};
    ngOnInit(){
        for (let i=0;i<this._mService.tasks.length;i++){
          this.tasksDash[i]=this._mService.tasks[i].split('@');         
        }         
        if (this._lService.logInUserName==""){
          //this.router.navigateByUrl('/');           
        }
    };
    infoClick($event:any){        
        this._mService.taskInfoId=($event.target.id);        
        this.router.navigateByUrl('/ti'); 
    }
    addTask(){
        this.router.navigateByUrl('/ai');
    }
}
