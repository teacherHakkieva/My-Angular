import { Component } from '@angular/core';
import { ICourse } from '../../shared/interfaces/course';
import { ApiService } from '../../api.service';
import { PageService } from '../page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent {

  courses: ICourse[] | undefined

  constructor(private pageService: PageService) {
    this.getAllCourses()
  }

  getAllCourses(){
    this.courses=undefined;
    this.pageService.getAllCourses().subscribe((courses)=> this.courses=courses)
  }
 
}
 