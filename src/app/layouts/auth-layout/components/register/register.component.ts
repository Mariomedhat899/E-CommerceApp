import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidationmessagesComponent } from "../../../../shared/components/validationmessages/validationmessages.component";
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { passwordMatchValidator } from '../../../../shared/utilities/password-match';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, ValidationmessagesComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  resMessage: string = '';  
  isloading = true;

  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly authService = inject(AuthService); 

  authform = this.fb.group({
    name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.minLength(6), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)]],
    rePassword: [null, [Validators.required, Validators.minLength(6)]]
  }, { validators: passwordMatchValidator });

 

  submitForm() {
    this.isloading = false;

    if (this.authform.valid || !this.isloading) {
      this.authService.register(this.authform.value).subscribe({
        next: (res) => {
          console.log(res);
          this.isloading = true;

          if (res.message == 'success') {
            this.router.navigate(['/auth/login']);
          }
        },
        error: (err) => {
          console.log(err);
          this.isloading = true;
          this.resMessage = err.error.message;
        }
      });
    } else {
      this.authform.markAllAsTouched();
    }
  }

  password: boolean = false;

  showPassword() {
    this.password = !this.password;
  }
}
