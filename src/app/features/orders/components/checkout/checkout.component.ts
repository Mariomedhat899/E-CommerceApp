import { OrderService } from './../../services/order.service';
import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
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
  private readonly authService =inject(AuthService)
  private readonly orderService =inject(OrderService)

  checkForm !:FormGroup;

  FormInit(){
    this.checkForm = this.fb.group({
      details: [null, [Validators.required]],
      phone: [null, [Validators.required ]],
      city: [null, [Validators.required]],
  
    })
  }

  ngOnInIt(){
    this.FormInit();
  }

}
