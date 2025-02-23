import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../layouts/auth-layout/services/auth.service';
import { inject } from '@angular/core';


export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if(authService.IsAuthenticated()){
    return true;
  }else{

   
    router.navigate(['/auth/login']);
    return false;
  }

 
  
};
