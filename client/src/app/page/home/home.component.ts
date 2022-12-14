import { Component, OnInit } from '@angular/core';
import { ICourse } from '../../shared/interfaces/course';
import { PageService } from '../page.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  courses: ICourse[] | undefined

  constructor(private pageService: PageService,private router:Router) {
    this.getLastCourse()
   }

    getLastCourse(){
    this.pageService.getReacent().subscribe({
      next:(courses)=>this.courses=courses,
     error:(err)=>console.log(err)
      
    })
  }
}
