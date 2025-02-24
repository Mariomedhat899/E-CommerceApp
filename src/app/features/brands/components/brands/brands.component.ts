import { Component, inject } from '@angular/core';
import { ProductService } from '../../../product/services/product.service';
import { Brand, Product, Product2 } from '../../../models/cart.interface';
import { BrandService } from '../../services/brand.service';

@Component({
  selector: 'app-brands',
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css'
})
export class BrandsComponent {
[x: string]: any;

 private readonly Brand = inject(BrandService);

  allbrands: Brand[] = [];


  getBrands(){

    this.Brand.getAllBrands().subscribe({
      next:({data})=>{

        this.allbrands =data;

      }
    })

  }

  ngOnInit(){
    this.getBrands();
  }



}
