import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private activatedRoute:ActivatedRoute, private router: Router, private authService:AuthService) { 
  
  }
   

  errors: string | undefined = undefined;
  loginHandler(form: NgForm): void{
    console.log(form.value);
    
      this.authService.login(form.value).subscribe({
        next: () => this.router.navigate(['/']),
        error: (err) => {
          this.errors = err.error.error
        }
      })
    }
  }
 

