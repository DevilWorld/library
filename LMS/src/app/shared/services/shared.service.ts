import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Gender } from '../gender';

@Injectable()
export class SharedService {

  constructor(private _http: Http) { }

  getGender(){

    let headers = new Headers({'Accept': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this._http.get('http://localhost:7319/gender/');

  }

}
 