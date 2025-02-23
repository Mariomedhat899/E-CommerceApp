import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../env/env';
import { Observable } from 'rxjs';
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpclient:HttpClient) { }

  register(data:any):Observable<any>{

    return this.httpclient.post(environment.baseUrl+'auth/signup',data)
  }
  login(data:any):Observable<any>{

    return this.httpclient.post(environment.baseUrl+'auth/signin',data)
  }
  decodeToken(){
    try{
      if(typeof localStorage != 'undefined'){
      const decoded = jwtDecode(localStorage.getItem('authtoken')!);

      console.log(decoded);
      }
    }catch{
      this.logout()
    }
  }

  saveToken(token:string):void{
    if(typeof localStorage != 'undefined')
      localStorage.setItem('authtoken',token);
    
  }

  getToken():String|null{
    if(typeof localStorage != 'undefined')
      return localStorage.getItem('authtoken');
    
    return null;
  }

  IsAuthenticated(): boolean{
    if(typeof localStorage != 'undefined')
    return !!localStorage.getItem('authtoken');

    return false;
  }

  logout():void{
    localStorage.clear();
  }
}
