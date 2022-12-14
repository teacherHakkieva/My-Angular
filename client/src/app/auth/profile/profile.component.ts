import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICourse } from 'src/app/shared/interfaces/course';
import { IUser } from 'src/app/shared/interfaces/user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  courses: ICourse[] | any;
  token: string | null = localStorage.getItem('token');

  constructor(
    private authService: AuthService,
    private actvatedRoute: ActivatedRoute
  ) {
    this.profile();
  }

  get user(){
    return this.authService.user
  }
  profile(): void {
    this.authService.profile().subscribe({
      next: (value) => {
       console.log(value);
       
             
      },
      error: (err) => console.log(err)
    })
  }
}
