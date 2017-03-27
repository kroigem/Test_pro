import { Injectable } from '@angular/core';

@Injectable()

export class MainService {
    public tasks      : string[] = [];
    public taskInfoId : number   = 0;   
    public nextIndex  : number   = 2;
    public taskCount  : number   = 2;

    public logInUserName : string = "";

    public tryToReg : boolean = false;
    
    constructor() {
            this.tasks[0] = "0@NAME2@2017-01-01@true@asdasdasdasd";
            this.tasks[1] = "1@NAME1@2017-01-01@true@asdasdasdasd";
    }
    
};