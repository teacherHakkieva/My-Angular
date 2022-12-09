import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth/auth.service';
import { UserRoutingModule } from 'src/app/auth/user-router.module';
import { ICourse } from 'src/app/shared/interfaces/course';
import { IUser } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent  {
  course: ICourse | undefined;
  user: IUser |undefined;
  constructor(private actvatedRoute: ActivatedRoute, private apiService: ApiService, private authService:AuthService, private router:Router, private fb:FormBuilder) { 
  
     
   }

   


   form=this.fb.group({
     title:['',[Validators.required, Validators.minLength(4)]],
     description:['',[Validators.required, Validators.minLength(20), Validators.maxLength(50)]],
     imageUrl:['',[Validators.required, Validators.pattern(/^https?:\/\/.+$/i)]],
     duration:['',[Validators.required]]
 
   })
   editHandler(){
     console.log(this.form.value)
   }

}
