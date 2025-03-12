import { Component, EventEmitter, inject, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';
import { product } from '../../models/product';
import { CartService } from '../../../cart/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {


  private readonly cart =inject(CartService);
  productDetails:product ={} as product

  ProductId!: string | null;

  private readonly toast= inject(ToastrService);
  
  
    showToastr(msg:string){
      this.toast.success(msg,'',{
        progressBar:true,
        timeOut:1500
      });
    }


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

  AddToCart(){

  
    

    this.cart.addToCart(this.ProductId!).subscribe({
      next:(res)=>{
        this.showToastr('Product added to cart');        
        this.cart.counter.set(res.numOfCartItems);
      }
    })
   
  }

 

}
