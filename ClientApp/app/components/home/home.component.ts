import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from '../../service/product.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [ProductService]
})

export class HomeComponent implements OnInit {
    //title = 'Tour of Heroes';
    products: Product[];
    selectedProduct: Product;

    constructor(private productService: ProductService) { }

    getProducts(): void {
        this.productService.getProducts().then(products => this.products = products);
    }
    ngOnInit(): void {
        this.getProducts();
    }
    onSelect(product: Product): void {
        this.selectedProduct = product;
    }
}