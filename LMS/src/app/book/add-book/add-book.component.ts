import { BooksService } from './../services/booksService';
import { Component, OnInit } from '@angular/core';
import { } from '../BooksService';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  bookName: string = 'test';
  authorId: number = 0;
  totalCopies: number = 0;
  availableCopies: number = 0;

  constructor(private _booksService: BooksService) { this.getBooks(); }

  private books: any;

  ngOnInit() {

  }

  getBooks() {
    this._booksService.getBooks().subscribe(
      data => { this.books = data }
    )
  };

}
