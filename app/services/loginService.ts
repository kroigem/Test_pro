import { Injectable } from '@angular/core';

@Injectable()

export class LoginService{

    public CurrentUser : User;
    constructor() {        
            this.CurrentUser = new User();                     
        };

//0 - login err
//1 - pass err
//2 - ok
    toLog (userLogin : string, userPassword : string) : number {        
       
        if (userLogin != this.CurrentUser.login) {return 0;}
        else {
            if (userPassword != this.CurrentUser.pass){
                return 1;
            }
            else {
                return 2;
            }
        }  
    }
}
    class User{
       login : string;
       pass : string; 
       constructor (){
           this.login = "admin";
           this.pass = "admin";
       }
    }