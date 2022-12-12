import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICourse } from '../../shared/interfaces/course';
import { IUser } from '../../shared/interfaces/user';

import { ApiService } from '../../api.service';
import { AuthService } from 'src/app/auth/auth.service';
import { IfStmt } from '@angular/compiler';
import { PageService } from '../page.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  course: ICourse | undefined;
  token:string |null=localStorage.getItem('token')
 isAuthor: boolean = false;
  errors: Object | undefined



  constructor(private actvatedRoute: ActivatedRoute,private pageService:PageService,private authService:AuthService, private router:Router) { 
   this.getCourse()
  }
  
  getCourse():void{
    this.course = undefined;
    const id= this.actvatedRoute.snapshot.params['id']; 
    this.pageService.getCourse(id).subscribe({
      
      next: (course) =>{
        this.course=course
        if(this.authService.user?._id==course.owner._id){
          this.isAuthor = true
        }else{
          this.isAuthor = false
        }
      },

      error:(err)=>{
        this.errors=err.console.error?.error;
        console.log(err);
        
        
      }
    })
  }

  delete(){
    const id=this.course?._id;
    this.pageService.deleteCourse(id).subscribe({
      next:()=>this.router.navigate(['/courses']),
      error:(error)=>console.log(error)  
      
    })
  }
  

}
