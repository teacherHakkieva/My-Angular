import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICourse } from '../../shared/interfaces/course';
import { ApiService } from '../../api.service';
import { AuthService } from 'src/app/auth/auth.service';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  course: ICourse | undefined;
  
  get isAuthor(): boolean {
    if(this.course?.owner == this.authService.user?.username){
        return true;
    }else{
        return false;
    }
  }

  constructor(private actvatedRoute: ActivatedRoute, private apiService: ApiService, private authService:AuthService, private router:Router) { 
   this.getCourse()
    
  }
  getCourse():void{
    this.course = undefined;
    const id= this.actvatedRoute.snapshot.params['id']; 
    this.apiService.loadCourse(id).subscribe(course => this.course = course)
  }

  delete(){
    const id=this.course?._id;
    this.apiService.deleteCourse(id).subscribe({
      next:()=>this.router.navigate(['/courses']),
      error:(error)=>console.log(error)  
      
    })
  }
  

}
