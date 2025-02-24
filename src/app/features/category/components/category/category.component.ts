import { Component, inject } from '@angular/core';
import { product } from '../../../product/models/product';
import { ProductService } from '../../../product/services/product.service';
import { Category } from '../../../models/cart.interface';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-category',
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  private readonly Category = inject(CategoriesService);
  
    allCategories:Category[] =[];


  getAllCategories(){
    this.Category.getAllCategories().subscribe({
      next:({data})=>{

        this.allCategories = data;
      }
    })
  }
  
    
  ngOnInit(){
    this.getAllCategories();
  }
  
  

}
