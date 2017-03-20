import {Injectable} from '@angular/core';

@Injectable()

export class LoginService{
    allowLogin:string="admin";
    allowPassword:string="admin";

    logInUserName:string="";
}