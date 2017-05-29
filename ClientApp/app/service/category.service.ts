import { Injectable } from '@angular/core';
import {Category} from '../model/category';
import { CATEGORIES } from '../dummydata/dummy-categories';

@Injectable()
export class CategoryService {

    getCategories(): Promise<Category[]> {
        return Promise.resolve(CATEGORIES);
    }
}