import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app.routing';
import { Ng2BootstrapModule } from "ng-bootstrap"

@NgModule({
  declarations: [
    AppComponent,
     routingComponents   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2BootstrapModule.forRoot()
  ],
  providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
