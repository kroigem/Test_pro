import { Component } from '@angular/core';
import { MainService } from './services/mainService';

@Component({
  selector : 'my-app',
  template : `    
    <router-outlet> </router-outlet>
    `
})
export class AppComponent {
    constructor( public _mService : MainService) { };
}
