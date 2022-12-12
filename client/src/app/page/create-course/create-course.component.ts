import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PageService } from '../page.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent  {

  errors: string | undefined = undefined;

  constructor( private router: Router, private  pageService: PageService) {}

  
  createHandler(form:NgForm){
    this.pageService.createCourse(form.value).subscribe({
      next:()=> this.router.navigate(['/courses']),
      error:(err)=>{
        this.errors=err.error.error;
        
      }
    })
  }
}