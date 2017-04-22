import { Component,OnInit,OnChanges } from '@angular/core';
import { Router } from '@angular/router';

import { MainService } from '../services/MainService';

@Component({
  selector : 'page-main',
  templateUrl : './app/templates/mainPage.html',
  styleUrls : ['./app/styles/main.css'] 
})
export class MainPage implements OnInit { 
  isShowDelModal : boolean = false;
  empty : boolean = false;
  deleteId : number = -1;
  isShowTI : boolean = true;

    
//////////////////////////////////////// 
  constructor (private _mSrv  : MainService,
               private router : Router               
               ) {};
  ngOnInit() {
    if (this._mSrv.loginedUser == "") {
      this.router.navigateByUrl('');     
    };
  };  
////////////////////////////////////////  

  logOut() {
    this._mSrv.loginedUser = "";
    sessionStorage.setItem('ID',"");
    this.router.navigateByUrl('');
  };
// 0 - info
// 1 - Add
// 2 - modify
  toTask(typ : number,event : any) {
    if (this.isShowTI) {      
      this._mSrv.taskPageType = typ;
      if (typ !=1) {this._mSrv.currentTaskID = event.target.id/1};
      this.router.navigateByUrl('/taskPage');
    }
  };

  delTask() {       
    this._mSrv.delTask(this.deleteId); 
    this.hideModal(); 
    this.empty = this._mSrv.tasks.length == 0 ? true : false;
    this.isShowTI = true; 
  };

  showModal(event : any) {  
      this.isShowTI = false; 
      this.deleteId = event.target.id/1;
      this.isShowDelModal = true;  
  };

  hideModal() {     
    this.isShowDelModal = false;  
    this.isShowTI = true;
  };


};
