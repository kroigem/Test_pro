import { Injectable } from '@angular/core';

@Injectable()

export class LoginService{
    constructor () {
        this.getUserData();
    };
    currentUser : User;
    
    getUserData = () => {
         this.currentUser = new User("admin","admin","a01fb812-8b6e-454c-b7c9-499d8448d6c6");
    };  
};
    

class User{
    userName : string;
    userPass : string;
    ID : string;
    constructor (uName : string, uPas: string, uId: string) {
        this.userName = uName;
        this.userPass = uPas;
        this.ID = uId;
    };
//              a99fa811-8a1a-151n-h7c5-421d8878das6
// 0 - login err
// 1 - pass err
// 2 - ok
    allowLog (login : string , pass : string) : number {
        if (login == this.userName) {
            if (pass == this.userPass) {
                sessionStorage.setItem('ID',this.ID);
                return 2;

            }
            else {
                return 1;
            }
        }
        else {
            return 0;
        }
    }
};   

  