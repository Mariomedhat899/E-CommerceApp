import { Component } from '@angular/core';
import { NavbarComponent } from "../../../../shared/components/navbar/navbar.component";
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from "../../../../features/product/components/product-list/product-list.component";
import { MainSliderComponent } from "../main-slider/main-slider.component";
import { CategorySliderComponent } from "../category-slider/category-slider.component";

@Component({
  selector: 'app-home',
  imports: [ProductListComponent, MainSliderComponent, CategorySliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
