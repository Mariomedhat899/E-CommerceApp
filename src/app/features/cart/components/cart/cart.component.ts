import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Cart } from '../../../models/cart.interface';
import { CartItemComponent } from "../cart-item/cart-item.component";
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-cart',
  imports: [CartItemComponent,RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  private readonly cartService = inject(CartService);

  cartDetails: Cart = {} as Cart;
  isLoading: boolean = false;

  loadCart(){
    this.cartService.getLoggedUserCart().subscribe({
      next:(res)=>{
        this.cartDetails = res;
        this.isLoading = true;

        this.cartService.counter.set(this.cartDetails.numOfCartItems);
      }
    })
  }

  ngOnInit(){
    this.loadCart();
  }


  removeProduct(id:string){
    this.cartService.removeCartIteam(id).subscribe({
      next:(res)=>{

        this.cartService.counter.set(this.cartDetails.numOfCartItems);
        this.cartDetails = res;
        
      }
    })
  }

  updateQuantity(id:string,count:number){

    this.cartService.updateCartQuantity(id,count).subscribe({
      next:(res)=>{
        this.cartDetails = res;
      }
    })
  }
 
  clearCart(){
    this.cartService.ClearUserCart().subscribe({
      next:(res)=>{
        console.log(res);

        if(res.message =='success'){
          this.loadCart();
        }
        
      }
    })
  }

}
