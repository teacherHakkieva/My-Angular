import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth/auth.service';
import { UserRoutingModule } from 'src/app/auth/user-router.module';
import { ICourse } from 'src/app/shared/interfaces/course';
import { IUser } from 'src/app/shared/interfaces/user';
import { PageService } from '../page.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent  {
  course: ICourse | undefined;
  user: IUser |undefined;
  token: string | null = localStorage.getItem('token')
  errors: Object | undefined
  constructor(private actvatedRoute: ActivatedRoute, private pageService: PageService, private authService:AuthService, private router:Router, private fb:FormBuilder) { 
  
  
   }



 
   editHandler(form:NgForm){
    if(this.authService.user?._id != this.course?.owner._id || !this.token){
      this.router.navigate(['**'])
    }
    const data=form.value
    const id = this.course?._id;
    this.pageService.editCourse(id, data).subscribe({
      next: (course) => {
        this.course = course
       
      },
      error: (err) => {
        this.errors = err.error?.error
      }
    })
   }

}
