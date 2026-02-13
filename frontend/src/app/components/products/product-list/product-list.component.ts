import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService,
    private router: Router) {
  }
  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts()
      .subscribe(data => this.products = data);
  }

  deleteProduct(id: string) {
    this.productService.deleteProduct(id)
      .subscribe(() => this.loadProducts());
  }

  editProduct(id: string) {
    this.router.navigate(['/edit', id]);
  }
}
