import { Injectable, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()

export class MainService {
    tasks = new Array <Task>();
    maxID : number = 4;   
    
///////////////////////////////////
    loginedUser : string = "";
    taskPageType : number = -1;
    currentTaskID : number = -1;
    loginedUserId : string = "";
///////////////////////////////////
    constructor (private http: Http ) {             
      //  this.tasks[0] = new Task(0, "Task0", "2017-03-03", true, "text2",0);
        this.makeRequest(); 
    };

    addTask (n : string, d : string, a : boolean, i: string, p:number) {
        this.tasks.push(new Task(this.maxID, n, d, a, i,p));
        this.maxID ++;
    };

    delTask (taskID : number) {
        for (let i = taskID; i < this.tasks.length-1; i++){
            this.tasks[i] = this.tasks[i+1];            
            this.tasks[i].id -=1;
        }
        this.tasks.pop();
        this.maxID -- ;
    };

    makeRequest() {
      this.http.request("http://webapinetweb.azurewebsites.net/api/request/"+ sessionStorage.getItem("ID")+ "/")
          .subscribe((res: Response) => {
          for ( let i = 0; i< res.json().length; i++){
             let re = res.json()[i];
             let DT = ""+re["createDateTime"];
             this.tasks[i] = new Task(i, 
                                      re["header"],
                                      DT.split('T')[0],
                                      true,
                                      re["description"],
                                      re["priority"]);
          }          
      })
    };    
};

class Task {
    name : string;
    date : string;
    active : boolean;
    text : string;   
    changeDate : string; 
    id : number;
    textColor : any;
    priority : number;

    constructor (i : number, n: string, d:string, a:boolean, t:string, p: number) {
        this.id =i;
        this.active = a;
        this.date = d;
        this.name = n;
        this.text = t;
        this.changeDate = d;
        this.textColor = '#000';
        this.priority = p;
    };
};