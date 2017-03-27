import { Injectable } from '@angular/core';

@Injectable()

export class LoginService{
    public allowLogin    : string[] = [];             
    public allowPassword : string[] = [];    

    constructor() {        
            this.allowLogin[0]    = "admin";
            this.allowPassword[0] = "admin";               

            this.allowLogin[1]    = "user";
            this.allowPassword[1] = "user";                                  
        };

//0 - login err
//1 - pass err
//2 - ok
    toLog (userLogin : string, userPassword : string) : number {        
        let tempX : number = this.allowLogin.indexOf( userLogin );
        if (tempX == -1) {return 0;}
        else {
            if (this.allowPassword[ tempX ] != userPassword){
                return 1;
            }
            else {
                return 2;
            }
        }  
    }
}