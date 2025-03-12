import { Component, inject, Input } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { product } from '../../models/product';
import { ProductCardComponent } from "../product-card/product-card.component";
import { CartService } from '../../../cart/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { SearchPipe } from '../../../../core/pipes/search.pipe';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent,SearchPipe,FormsModule ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {


  searchTerm:string ='';


  private readonly productService = inject(ProductService);

  private readonly cart = inject(CartService);

  private readonly toast= inject(ToastrService)


  showToastr(msg:string){
    this.toast.success(msg,'',{
      progressBar:true,
      timeOut:1500
    });
  }


  allProducts: product[] = [];

  

  getAllProducts() {
    this.productService.getProducts().subscribe({
      next: ({ data }) => {
        if (Array.isArray(data)) {
          this.allProducts = data;
        } else {
          console.error('Expected an array of products');
        }
      },
      error: (err) => {
        console.error('Error fetching products', err);
      }
    });
  }

  ngOnInit() {
    this.getAllProducts();
  }

  addToCart(id:string){

    this.cart.addToCart(id).subscribe({
      next:(res)=>{


        this.showToastr('Product added to cart');


        this.cart.counter.set(res.numOfCartItems);

        

      }
    })
  }


}
