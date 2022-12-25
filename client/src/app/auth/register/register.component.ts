import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {passwordValidator, errorServer} from 'src/app/shared/validator';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form!: FormGroup;
  errors: string | undefined = undefined;

  constructor(private fb: FormBuilder, private router: Router, private authService:AuthService) { 

  this.form = this.fb.group({
    username:['',[Validators.required, Validators.minLength(5)]],
    password:['',[Validators.required, Validators.minLength(5)]],
    rePassword: ['',[Validators.required,passwordValidator]],
   });
}
  registerHandler(): void{
    this.authService.register(this.form.value).subscribe({
      next: () => this.router.navigate(['/courses']),
      error: (err) => {
              this.errors = errorServer(err.error.error)
      }
    })
    }
  
}
