import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBookComponent } from './add-book/add-book.component';
import { BooksService } from './services/booksService';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AddBookComponent],
  exports: [AddBookComponent]
})
export class BookModule { }
