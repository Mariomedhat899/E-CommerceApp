import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { AuthService } from '../../../../layouts/auth-layout/services/auth.service';
import { ProductService } from '../../../product/services/product.service';
import { product } from '../../../product/models/product';

@Component({
  selector: 'app-brands',
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css'
})
export class BrandsComponent {
[x: string]: any;

 private readonly product = inject(ProductService);

  allbrands: product[] = [];


  ngOnInit() {
    this.product.getProducts().subscribe({
      next: ({ data }) => {
        if (Array.isArray(data)) {
          this.allbrands = data;
        } else {
          console.error('Expected an array of products');
        }
      },
      error: (err) => {
        console.error('Error fetching products', err);
      }
    });
  }



}
