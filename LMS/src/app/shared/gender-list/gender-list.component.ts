import { SharedService } from './../services/shared.service';
import { Component, OnInit } from '@angular/core';
import { Gender } from '../gender';



@Component({
  selector: 'gender-list',
  templateUrl: './gender-list.component.html',
  styleUrls: ['./gender-list.component.css']
})
export class GenderListComponent implements OnInit {

  public genders: any;

  constructor(private _sharedService: SharedService) {

  }

  ngOnInit() {
    this.getGenders()
  }

  getGenders() {
    return this._sharedService.getGender().map(res => res.json()).subscribe(
      data => this.genders = Array.of(data),
      err => console.log(err)
    );
  }

}
