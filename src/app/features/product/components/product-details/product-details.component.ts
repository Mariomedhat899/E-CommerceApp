import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';
import { product } from '../../models/product';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {


  productDetails:product ={} as product

  ProductId!: string | null;

  private readonly activatedRoute = inject(ActivatedRoute);

  private readonly productService =inject(ProductService);

  getProductId(){
    this.activatedRoute.paramMap.subscribe({
      next:(urlData)=>{

        this.ProductId = urlData.get('id');
        
      }
    })
  }

  ngOnInit(){
    this.getProductId();

    this.getProductDetails(this.ProductId!);
  }

  getProductDetails(id:string|null){

    this.productService.getProductDetails(id).subscribe({
      next:({data})=>{

        this.productDetails = data;
        
      }
    })
      

    

  }

}
