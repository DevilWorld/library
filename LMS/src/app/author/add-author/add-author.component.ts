import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../services/author.service';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {

  firstName: string;
  middleName: string;
  lastName: string;

  private result: any;

  constructor(private _authorService: AuthorService) { }

  ngOnInit() {
    
  }

  addAuthor() {
    this._authorService.addAuthor().subscribe(
      data => { this.result = data }
    )
  };

}
