import { Component, OnInit } from '@angular/core';
import { ICourse } from '../../shared/interfaces/course';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {

  courses: ICourse[] | null=null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.loadCourses().subscribe({
      next: (value) => {
        this.courses=value;
       
        
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
 
}
 