import { AddBookComponent } from './book/add-book/add-book.component';
import { BooksService } from './book/services/booksService';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, Response, HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app.routing';
import { Ng2BootstrapModule } from "ng-bootstrap";



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AddBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2BootstrapModule.forRoot(),
    HttpModule,
    
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
