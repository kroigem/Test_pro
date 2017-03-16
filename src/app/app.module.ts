import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {LoginAC} from './components/login.component';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [BrowserModule,FormsModule],
    declarations: [AppComponent, LoginAC],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
