import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  productForm!: FormGroup;
  productId!: string | null;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.productForm = this.fb.group({
      name: [''],
      price: [''],
      description: ['']
    });

     this.productId = this.route.snapshot.paramMap.get('id');

    if (this.productId) {
      this.productService.getProductById(this.productId)
        .subscribe(data => this.productForm.patchValue(data));
    }
  }

   onSubmit() {

    if (this.productId) {
      this.productService.updateProduct(this.productId, this.productForm.value)
        .subscribe(() => this.router.navigate(['/']));
    } else {
      this.productService.createProduct(this.productForm.value)
        .subscribe(() => this.router.navigate(['/']));
    }
  }
}
