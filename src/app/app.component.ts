import { Component } from '@angular/core';

import {LoginAC}  from './components/login.component';      

@Component({
  selector: 'my-app',
  template: `
            <header>
                <login-app></login-app>
            </header>
            <div id="mainBody">
            </div>
            `
})
export class AppComponent { name = 'Angular'; }
