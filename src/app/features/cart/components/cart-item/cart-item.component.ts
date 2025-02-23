import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../models/cart.interface';

@Component({
  selector: 'app-cart-item',
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {

  @Input() product:Product ={} as Product;
  


  @Output() RemoveProduct = new EventEmitter<string>
  @Output() updateQuantity = new EventEmitter<{id:string,count:number}>


  onUpdatequt(NewCount: number){
    this.updateQuantity.emit({id:this.product.product._id,count:NewCount})
  }

  
  onRemove(){

    this.RemoveProduct.emit(this.product.product._id)
  }
}
