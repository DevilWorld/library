import { GenderListComponent } from './../../shared/gender-list/gender-list.component';
import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../services/author.service';
import { Author } from '../Author';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {

  firstName: string = '';
  middleName: string = '';
  lastName: string = '';
  gender: string = '';

  private result: any;

  constructor(private _authorService: AuthorService) { }

  ngOnInit() {
    
  }

  addAuthor() {

    let author: Author = { 
                    FirstName: this.firstName, 
                    MiddleName: this.middleName, 
                    LastName: this.lastName,
                    GenderId: 1, //this.gender,
                    CreatedBy: 'System',
                    CreatedDate: new Date(),
                    ModifiedBy: 'System',
                    ModifiedDate: new Date(),
                    Active: true
                };

    this._authorService.addAuthor(author).subscribe(
      data => { this.result = data },
      error => console.log(error)
    )
  };

}
