import { Author } from './../author';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthorService {

  constructor(private _http: Http) { }

  addAuthor(author: Author) {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({headers: headers});

    return this._http.post('http://localhost:7319/author/add', author, options)
          .map(this.extractData)
          .catch(this.handleErrorObservable);
  }

  private extractData(res: Response) {
    let body = res.json();
          return body.data || {};
      }

      private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
      }

      private handleErrorPromise (error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
      }	

}
