import { BooksService } from './book/services/booksService';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, Response, HttpModule } from '@angular/http';
import { BookModule } from './book/book.module'

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app.routing';
import { Ng2BootstrapModule } from "ng-bootstrap"
import { AddBookComponent } from './book/add-book/add-book.component';


@NgModule({
  declarations: [
    AppComponent,
     routingComponents,
    //  AddBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2BootstrapModule.forRoot(),
    HttpModule,
    BookModule
  ],
  providers: [BooksService],
   bootstrap: [AppComponent]
})
export class AppModule { }
