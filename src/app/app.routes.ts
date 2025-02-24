import { Routes } from '@angular/router';
import { AuthComponent } from './layouts/auth-layout/components/auth/auth.component';
import { LoginComponent } from './layouts/auth-layout/components/login/login.component';
import { RegisterComponent } from './layouts/auth-layout/components/register/register.component';
import { NotfoundComponent } from './core/components/notfound/notfound.component';
import { CategoryComponent } from './features/category/components/category/category.component';
import { BrandsComponent } from './features/brands/components/brands/brands.component';
import { CartComponent } from './features/cart/components/cart/cart.component';
import { HomeComponent } from './layouts/main-layout/components/home/home.component';
import { MainLayoutComponent } from './layouts/main-layout/components/main-layout/main-layout.component';
import { ProductListComponent } from './features/product/components/product-list/product-list.component';
import { ProductDetailsComponent } from './features/product/components/product-details/product-details.component';
import { authGuard } from './core/guards/auth.guard';
import { isLogedGuard } from './core/guards/is-loged.guard';
import { CheckoutComponent } from './features/orders/components/checkout/checkout.component';

export const routes: Routes = [
    

    {path:'',redirectTo:'auth/login',pathMatch:'full'},
    {path:'auth',canActivate:[isLogedGuard],component:AuthComponent,children:[
        {path:'',redirectTo:'login',pathMatch:'full'},
        {path:'login',component:LoginComponent},
        {path:'register',component:RegisterComponent}
    ]},

    
    {path:'main',canActivate:[authGuard],component:MainLayoutComponent,children:[
        {path:'',redirectTo:'home',pathMatch:'full'},
        {path:'login',redirectTo:'auth/login',pathMatch:'full'},
        {path:'home',component:HomeComponent,},
        {path:'products',component:ProductListComponent},
        {path:'product-details/:id',component:ProductDetailsComponent},
        {path:'categories',component:CategoryComponent},
        {path:'brands',component:BrandsComponent},
        {path:'cart',component:CartComponent},
        {path:'checkout/:id',component:CheckoutComponent},


    ]},

    {path:'**',component:NotfoundComponent}
    
];
