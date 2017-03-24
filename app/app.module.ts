import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent  } from './app.component';
import { LoginPage     } from './pages/login';
import { MainPage      } from './pages/main';
import { taskInf       } from './pages/taskInfo';
import { addInf        } from './pages/addTask';	 
import { Registaration } from './pages/registration';

import { Routes, RouterModule } from '@angular/router';

import { MainService } from './services/mainService';
import { LoginService } from './services/loginService';

const appRoutes : Routes = [
   {path : '',         component : LoginPage},
   {path : 'mainPage', component : MainPage},
   {path : 'infoTask', component : taskInf},
   {path : 'addTask',  component : addInf},
   {path : 'regPage',  component : Registaration}
];

@NgModule({
  imports :      [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  declarations : [AppComponent, LoginPage, addInf, MainPage, taskInf, Registaration],
  bootstrap :    [AppComponent],
  providers :    [LoginService, MainService]
})

export class AppModule { }
