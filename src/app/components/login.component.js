"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var login_service_1 = require('../services/login.service');
var LoginAC = (function () {
    function LoginAC(_loginService) {
        this._loginService = _loginService;
        this.name = "";
    }
    ;
    LoginAC.prototype.isSetData = function () {
        if (this.name.length == 0) {
            return true;
        }
    };
    LoginAC.prototype.isAllowedToLogin = function () {
        if ((this.lName == this._loginService.allowLogin) && (this.lPass == this._loginService.allowPassword)) {
            console.log("Welcome " + this.lName + " !");
            this._loginService.currentUser = this.lName;
            this.currentUser = this._loginService.currentUser;
        }
        else {
            alert("Access not allowed!");
        }
    };
    LoginAC.prototype.isUserLogin = function () {
        if (this._loginService.currentUser != "") {
            return false;
        }
        else {
            return true;
        }
    };
    LoginAC.prototype.LogOut = function () {
        this._loginService.currentUser = "";
    };
    LoginAC = __decorate([
        core_1.Component({
            selector: 'login-app',
            template: "\n             <button class=\"btn btn-primary\" id=\"loginBut\" *ngIf=\"!isUserLogin()\" (click)=\"LogOut()\">LogOut,{{currentUser}}!</button> \n             <div id=\"loginForm\" *ngIf=\"isUserLogin()\">\n                <input                     \n                    type=\"text\"                 \n                    id=\"loginName\"\n                    required  \n                    [(ngModel)]=\"lName\"    \n                                                                 \n                    >\n                <input type=\"password\"\n                    id=\"loginPass\"\n                    [(ngModel)]='lPass'\n                    required\n                    \n                    >\n\n                <button class=\"btn btn-danger\" \n                    id=\"loginBut1\"\n                    [disabled]=\"!(lName&&lPass)\"\n                    (click)=\"isAllowedToLogin()\"\n                    >Login</button>\n             </div>                                              \n            ",
            styleUrls: ['../styles/login.css'],
            providers: [login_service_1.LoginData]
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginData])
    ], LoginAC);
    return LoginAC;
}());
exports.LoginAC = LoginAC;
//# sourceMappingURL=login.component.js.map