import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAuthorComponent } from './add-author/add-author.component';
import { AuthorService } from './services/author.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AddAuthorComponent],
  providers: [AuthorService]  
})
export class AuthorModule { }
