import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../env/env';
import { AuthService } from '../../../layouts/auth-layout/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient,private auth:AuthService) { }

  createCheckOut(cartId:string,ShippingAdress:{details:string,phone:string,city:string}){
    this.http.post(environment.baseUrl+'orders/' +cartId,{
      ShippingAdress
        
    },{
      headers:{
      token:this.auth.getToken()!.toString(),
      }

      
    })
  }
}
