import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent  } from './app.component';
import { LoginPage     } from './components/LoginPage';
import { MainPage     } from './components/MainPage';
import { TaskPage     } from './components/TaskPage';

import { Routes, RouterModule } from '@angular/router';

import { MainService } from './services/MainService';
import { LoginService } from './services/LoginService';

const appRoutes : Routes = [
   {path : '',         component : LoginPage},
   {path : 'mainPage', component : MainPage},
   {path : 'taskPage', component : TaskPage}  
];

@NgModule({
  imports :      [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  declarations : [AppComponent, LoginPage, MainPage, TaskPage],
  bootstrap :    [AppComponent],
  providers :    [LoginService, MainService]
})

export class AppModule { }
