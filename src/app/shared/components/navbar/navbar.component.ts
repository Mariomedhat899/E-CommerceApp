import { Component, computed, inject, Input, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../layouts/auth-layout/services/auth.service';
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

  cartcount =computed(()=>this.cart.counter());

  private router = inject(Router);

  logout(){

    this.router.navigate(['/auth/login']);
    this.authService.logout();


  }

 
}
