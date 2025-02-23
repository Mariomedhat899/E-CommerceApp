import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ValidationmessagesComponent } from '../../../../shared/components/validationmessages/validationmessages.component';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, ValidationmessagesComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  authform!:FormGroup;
  resMessage: string = '';  
  isloading = true;
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly authService = inject(AuthService); 


  formInit() {
    this.authform = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)]],
    });
  }

  submitForm() {
    this.isloading = false;

    if (this.authform.valid || !this.isloading) {
      this.authService.login(this.authform.value).subscribe({
        next: (res) => {
          console.log(res);
          this.isloading = true;

          if (res.message == 'success') {
            this.authService.saveToken(res.token);
            this.router.navigate(['/main/home']);
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

  ngOnInit(){
    this.formInit();
  }
}
