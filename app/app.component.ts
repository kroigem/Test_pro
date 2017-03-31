import { Component } from '@angular/core';
import { MainService } from './services/MainService';
import { LoginService } from './services/LoginService';

@Component ({
  selector : 'my-app',
  template : `    
            <router-outlet>  </router-outlet>
             `
})
export class AppComponent {
    constructor(public _mService : MainService, 
                public _lService : LoginService 
    ) {};
}
