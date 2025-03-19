import { OrderService } from './../../services/order.service';
import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ValidationmessagesComponent } from '../../../../shared/components/validationmessages/validationmessages.component';
import { AuthService } from '../../../../layouts/auth-layout/services/auth.service';


@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule, ValidationmessagesComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly authService =inject(AuthService);
  private readonly orderService =inject(OrderService);
  private readonly acttivated = inject(ActivatedRoute);

  cartId!:string| null;
  checkForm !:FormGroup;

  FormInit(){
    this.checkForm = this.fb.group({
      details: [null],
      phone: [null, [Validators.required ]],
      city: [null, [Validators.required]],
  
    })
  }

  ngOnInit(){
    this.FormInit();

    this.getCartId();
  }

  getCartId(){
    return this.acttivated.paramMap.subscribe({
      next:(data)=>{

   
        this.cartId = data.get('id');
        

      }
    })
  }

  submitForm(){
    

    if(this.checkForm.invalid||this.checkForm.value!=null){

      this.orderService.createCheckOut(this.cartId,this.checkForm.value).subscribe({
        next:(res)=>{

          console.log(res);
          
      
          open(res.session.url, '_self');
          
        }
      })
    }

  }

}
