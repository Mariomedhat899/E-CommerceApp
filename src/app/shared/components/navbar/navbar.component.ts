import { Component, inject, Input } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../layouts/auth-layout/services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  @Input() layout!:string

  private readonly authService =inject(AuthService);

  private router = inject(Router);

  logout(){

    this.router.navigate(['/auth/login']);
    this.authService.logout();


  }
}
