import { NgModule }      from ' @angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { LoginPage    }	 from './pages/login';
import { MainPage     }  from './pages/main';
import { TaskInfo     }  from './pages/taskInfo';
import { addInfo      }  from './pages/reg';	 

import {Routes,RouterModule} from '@angular/router';

import {MainService} from './services/mainService';

const appRoutes:Routes=[
   {path : '', component : LoginPage},
   {path : 'mainPage', component : MainPage},
   {path : 'taskInfo', component : TaskInfo},
   {path : 'addInfo', component : addInfo}
];


@NgModule({
  imports : [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
  declarations : [    AppComponent, LoginPage, addInfo, MainPage, TaskInfo],
  bootstrap : [ AppComponent ],
  providers :[ MainService ]
})
export class AppModule { 

}
