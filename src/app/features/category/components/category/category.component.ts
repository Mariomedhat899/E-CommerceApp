import { Component, inject } from '@angular/core';
import { product } from '../../../product/models/product';
import { ProductService } from '../../../product/services/product.service';

@Component({
  selector: 'app-category',
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  private readonly product = inject(ProductService);
  
    allCategories: product[] = [];
  
  
    ngOnInit() {
      this.product.getProducts().subscribe({
        next: ({ data }) => {
          if (Array.isArray(data)) {
            this.allCategories = data;
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
