import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthorService {

  constructor(private _http: Http) { }

  addAuthor(){
    return this._http.post('http://localhost:7319/author/', null).map((res:Response) => res.json());
  }

}
