import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../layouts/auth-layout/services/auth.service';

export const isLogedGuard: CanActivateFn = (route, state) => {
  

   const authService = inject(AuthService);
    const router = inject(Router);
    if(authService.IsAuthenticated()){
      router.navigate(['/main/home']);
      return false;
    }else{
      
      return true;
     
    }
};
