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

  

}
