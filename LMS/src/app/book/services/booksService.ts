import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class BooksService {

    constructor(private http: Http) { }

    getBooks(){
        return this.http.get('http://localhost:22279/Application/all-towns').map((res:Response) => res.json());
    }

}