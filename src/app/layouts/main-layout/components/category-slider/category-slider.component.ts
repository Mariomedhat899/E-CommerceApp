import { Component, inject } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ProductService } from '../../../../features/product/services/product.service';
import { Category, product } from '../../../../features/product/models/product';
import { Observable } from 'rxjs';
import { CategoriesService } from '../../../../features/category/services/categories.service';
@Component({
  selector: 'app-category-slider',
  imports: [CarouselModule],
  templateUrl: './category-slider.component.html',
  styleUrl: './category-slider.component.css'
})
export class CategorySliderComponent {


  private readonly product = inject(ProductService);
  private readonly category = inject(CategoriesService);

  categoryimgs:Category[] =[];


 

  getAllImgs():Observable<any>{

    return this.category.getAllCategories()

  }

  ngOnInit(){
    this.getAllImgs().subscribe({
      next:({data})=>{

        this.categoryimgs = data;
        
      }
    })
  }


  customOptions: OwlOptions = {
      loop: true,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      dots: false,
      navSpeed: 500,
      navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
      responsive: {
        0: {
          items: 6
        },
        400: {
          items: 6
        },
        740: {
          items: 6
        },
        940: {
          items: 6
        }
      },
      nav: true
    }

}
