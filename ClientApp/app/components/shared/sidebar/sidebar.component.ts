﻿import { Component, OnInit } from '@angular/core';
import { Category } from '../../../model/category';
import { CategoryService } from '../../../service/category.service';


@Component({
    selector: 'shared-sidebar',
    templateUrl: './sidebar.component.html',
    providers: [CategoryService]
})

export class SidebarComponent implements OnInit {
    //title = 'Tour of Heroes';
    categories: Category[];
    selectedCategory: Category;
    errorMessage: string;
    constructor(private categoryService: CategoryService) { }

    getCatogories(): void {
    //    this.categoryService.getCategories().then.(categories => this.categories = categories);
        this.categoryService.getCategories().subscribe(
            Categories => this.categories = Categories,
            error => this.errorMessage = <any>error);;
    }
    ngOnInit(): void {
        this.getCatogories();
    }
    onSelect(category: Category): void {
        this.selectedCategory = category;
    }
}
