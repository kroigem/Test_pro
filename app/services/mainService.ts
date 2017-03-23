import { Injectable } from '@angular/core';

@Injectable()

export class MainService {
    public tasks      : string[] = [];
    public taskInfoId : number   = 0;   
    public nextIndex  : number   = 2;

    public allowLogin    : string[] = [];             
    public allowPassword : string[] = [];    

    public logInUserName : string = "";

    constructor() {        
        this.allowLogin[0]    = "admin";
        this.allowPassword[0] = "admin";               

        this.allowLogin[1]    = "user";
        this.allowPassword[1] = "user";
          
        this.tasks[0] = "0@NAME2@2017-01-01@true@asdasdasdasd";
        this.tasks[1] = "1@NAME1@2017-01-01@true@asdasdasdasd";
    };
};