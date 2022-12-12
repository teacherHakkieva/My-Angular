import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { ICourse } from '../../shared/interfaces/course';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  courses: ICourse[] | null=null;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
   
  }

}
