﻿import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { PRODUCTS } from '../dummydata/dummy-products';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

    private ProductUrl = 'http://snowshopapi.azurewebsites.net/api/Product/Products';  // URL to web api

    //private ProductUrl = 'http://localhost:53423/api/Product/Products';  // URL to web api

    constructor(private http: Http) { }

    getProducts(): Observable<Product[]> {
        return this.http.get(this.ProductUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
    private extractData(res: Response) {
        let body = res.json()['model'];

        //console.log('test json 3' + res.json()['model'] );

        return res.json()['model'] as Product[];
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






/*
import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { PRODUCTS } from '../dummydata/dummy-products';

@Injectable()
export class ProductService {
   
    getProducts(): Promise<Product[]> {
        return Promise.resolve(PRODUCTS);
    }
}
*/