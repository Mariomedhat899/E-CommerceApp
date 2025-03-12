import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { environment } from '../../../../env/env';
import { AuthService } from '../../../layouts/auth-layout/services/auth.service';
import { ProductService } from '../../product/services/product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  counter:WritableSignal<number>= signal<number>(0);

  constructor(private http:HttpClient,private pro:ProductService,private auth:AuthService) { }

  addToCart(productId:string):Observable<any>{
    return this.http.post(environment.baseUrl + "cart",{
      productId,
    },{
      headers:{
      token: this.auth.getToken()!.toString()

      }
    })
  }

  updateCartQuantity(productId:string,count:number):Observable<any>{

    return this.http.put(environment.baseUrl +"cart/" +productId,{
      count
    },{
      headers:{
        token: this.auth.getToken()!.toString()
      }
    })
  }

  getLoggedUserCart():Observable<any>{

    return this.http.get(environment.baseUrl +"cart",
      {
      headers:{
        token: this.auth.getToken()!.toString()

      }
    })
  }

  removeCartIteam(productId:string):Observable<any>{

    return this.http.delete(environment.baseUrl +"cart" +productId,
      {
      headers:{
        token: this.auth.getToken()!.toString()
      }
    })
  }

  ClearUserCart():Observable<any>{

    return this.http.delete(environment.baseUrl +"cart",
      {
      headers:{
        token: this.auth.getToken()!.toString()
      }
    })
  }
      
}
