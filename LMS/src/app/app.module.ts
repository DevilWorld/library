import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, Response, HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app.routing';
import { Ng2BootstrapModule } from "ng-bootstrap";

import { HomeComponent } from './home/home/home.component';
import { AddBookComponent } from './book/add-book/add-book.component';
import { BooksService } from './book/services/booksService';
import { AddAuthorComponent } from './author/add-author/add-author.component';
import { AuthorService } from './author/services/author.service';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomeComponent,
    AddBookComponent,
    AddAuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2BootstrapModule.forRoot(),
    HttpModule
  ],
  providers: [BooksService, AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
