import { Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent  {

  constructor(private fb:FormBuilder) {}


  form=this.fb.group({
    title:['',[Validators.required, Validators.minLength(4)]],
    description:['',[Validators.required, Validators.minLength(20), Validators.maxLength(50)]],
    imageUrl:['',[Validators.required, Validators.pattern(/^https?:\/\/.+$/i)]],
    duration:['',[Validators.required]]

  })
  createHandler(){
    console.log(this.form.value)
  }
}
