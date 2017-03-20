import {Injectable} from '@angular/core';

@Injectable()

export class MainService{
    tasks:string[]=[];
    public taskInfoId:number=-1;   
    public nextIndex:number=2;
    constructor(){        
        this.tasks[0]="0@NAME2@2017-01-01@true@asdasdasdasd";
        this.tasks[1]="1@NAME1@2017-01-01@true@asdasdasdasd";
    }


}