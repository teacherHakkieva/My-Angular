import { Component } from '@angular/core';
import { ActivatedRoute, TitleStrategy } from '@angular/router';
import { ICourse } from 'src/app/shared/interfaces/course';
import { IUser } from 'src/app/shared/interfaces/user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  user: IUser | any;
  course: ICourse | any;
  token: string | null = localStorage.getItem('token');
  myCoursesString!: string;
  myEnrolledCourses!: string;
  constructor(
    private authService: AuthService,
    private actvatedRoute: ActivatedRoute
  ) {
    this.userCourses();
  }
  get userProfile() {
    return this.authService.user;
  }

  userCourses(): void {
    this.course = undefined;
    const userId = this.authService.user?._id;
    console.log(`UserId: ${userId}`);

    this.authService.profile().subscribe({
      next: (course) => {
        this.course = course;
        console.log(course);
        const myCourses = [];
        const allCourse = course.map(({ title, owner }) => ({[title]: owner}));

        for (const el of allCourse) {
          for (const [title, owner] of Object.entries(el)) {
            if (owner.toString() == userId) {
              myCourses.push(title);
            }
          }
        }
        this.myCoursesString = myCourses.join(', ');

        const allEnroll = [];
        const allEnrolled = course.map(({ title, enrolledUser }) => ({[title]: enrolledUser}));
        for (const el of allEnrolled) {
          for (const [title, enrolledUser] of Object.entries(el)) {
          for (const enroll of enrolledUser) {
            if (enroll.toString()==userId) {
              allEnroll.push(title)
            }
          }  
          }
        }
        this.myEnrolledCourses=allEnroll.join(', ')
      },
    });
  }
}
