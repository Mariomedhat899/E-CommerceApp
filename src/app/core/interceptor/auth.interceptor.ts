import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../../layouts/auth-layout/services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const auth = inject(AuthService);

  if(req.url.includes('cart') || req.url.includes('order')){
    req = req.clone({
      setHeaders: {
  
        token: auth.getToken()!.toString(),
  
      }
    })

  }
  
  return next(req);
};
