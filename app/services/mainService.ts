import { Injectable } from '@angular/core';

@Injectable()

export class MainService {
    tasks = new Array <Task>();
    maxID : number = 4;   
///////////////////////////////////
    loginedUser : string = "";
    taskPageType : number = -1;
    currentTaskID : number = -1;
///////////////////////////////////
    constructor () {
        this.tasks[0] = new Task(0, "Task0", "2017-03-03", true, "text2");
        this.tasks[1] = new Task(1, "Task1", "2017-13-13", true, "text21");
        this.tasks[2] = new Task(2, "Task2", "2017-13-13", true, "text21");
        this.tasks[3] = new Task(3, "Task3", "2017-13-13", true, "text21");
    };

    addTask (n : string, d : string, a : boolean, i: string) {
        this.tasks.push(new Task(this.maxID, n, d, a, i));
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
};

class Task {
    name : string;
    date : string;
    active : boolean;
    text : string;   
    changeDate : string; 
    id : number;
    textColor : any;

    constructor (i : number, n: string, d:string, a:boolean, t:string) {
        this.id =i;
        this.active = a;
        this.date = d;
        this.name = n;
        this.text = t;
        this.changeDate = d;
        this.textColor = '#000';
    };
};