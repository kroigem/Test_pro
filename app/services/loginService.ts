import { Injectable } from '@angular/core';

@Injectable()

export class LoginService{
    public allowLogin    : string = "admin";
    public allowPassword : string = "admin";

    public logInUserName : string = "";  
}