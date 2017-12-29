import { Component } from '@angular/core';
import { Gender } from '../gender'

@Component({
  selector: 'gender-list',
  templateUrl: './gender-list.component.html',
  styleUrls: ['./gender-list.component.css']
})
export class GenderListComponent {    

  genders = [
    new Gender(1, 'Male'),
    new Gender(2, 'Female')
  ]

}
