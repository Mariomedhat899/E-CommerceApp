import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from '../../../../env/env';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  activatedRoute: any;

  constructor(private http:HttpClient) { }

  getProducts():Observable<any>{
    return this.http.get( environment.baseUrl+ 'products');
  }

  getProductDetails(id:string|null):Observable<any>{
    return this.http.get(environment.baseUrl+ `products/${id}`);
  }

  getProductId(){
    this.activatedRoute.paramMap.subscribe({
      next:(urlData:any)=>{

        return urlData.get('id');
        
      }
    })
  }
}
