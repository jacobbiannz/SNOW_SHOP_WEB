﻿import { Injectable } from '@angular/core';
import {Category} from '../model/category';
import { CATEGORIES } from '../dummydata/dummy-categories';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {

    private categoryUrl = 'http://snowshopapi.azurewebsites.net/api/Category/Categories';  // URL to web api
    
    //private categoryUrl = 'http://localhost:53423/api/category/categories';  // URL to web api

    constructor(private http: Http) { }

    getCategories(): Observable<Category[]> {
        return this.http.get(this.categoryUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
    private extractData(res: Response) {
        let body = res.json()['model'];

        //console.log('test json 3' + res.json()['model'] );

        return res.json()['model'] as Category[];
    }

    private handleError(error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}


