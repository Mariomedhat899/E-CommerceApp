import { Component, inject, Input } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../layouts/auth-layout/services/auth.service';
import { ProductService } from '../../../features/product/services/product.service';
import { CartService } from '../../../features/cart/services/cart.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
[x: string]: any;

  @Input() layout!:string

  private readonly authService =inject(AuthService);
  private readonly cart = inject(CartService);

  cartcount = 0;

  private router = inject(Router);

  logout(){

    this.router.navigate(['/auth/login']);
    this.authService.logout();


  }

  ngOnInit(){
    this.cart.getLoggedUserCart().subscribe({
      next:({numOfCartItems})=>{

        this.cartcount = numOfCartItems;

  
        
      }
    })
  }
}
