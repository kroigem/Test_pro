import { Injectable} from '@angular/core';

@Injectable()

    export class LoginData{
        allowLogin:string="admin";
        allowPassword:string="admin";

        currentUser:string="";
    }
