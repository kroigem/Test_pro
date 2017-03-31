import { Injectable } from '@angular/core';

@Injectable()

export class LoginService{
    constructor() {};
    currentUser = new User();
};
    

class User{
    userName : string;
    userPass : string;
    constructor () {
        this.userName = "admin";
        this.userPass = "admin";
    };

// 0 - login err
// 1 - pass err
// 2 - ok
    allowLog(login : string , pass : string) : number {
        if (login == this.userName) {
            if (pass == this.userPass) {
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