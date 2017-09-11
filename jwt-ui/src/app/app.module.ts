import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {IndexComponent} from './components/index/index.component';
import {routing} from "./app.routing";
import {HttpModule} from "@angular/http";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {AuthGuardService} from "./services/auth-guard.service";
import {AuthService} from "./services/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule, routing, HttpModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    AuthGuardService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
