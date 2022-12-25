import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { PageRoutingModule } from './page-router.module';
import { RouterModule } from '@angular/router';

import { DetailsComponent } from './details/details.component';
import { CoursesComponent } from './courses/courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from '../auth/register/register.component';
import { EditComponent } from './edit/edit.component';
import { CreateCourseComponent } from './create-course/create-course.component';




@NgModule({
  declarations: [
    HomeComponent, 
  CoursesComponent,
    DetailsComponent,
  CreateCourseComponent,
  EditComponent,
      ],

  imports: [
    CommonModule,
    BrowserModule,
    PageRoutingModule,
    RouterModule,
    FormsModule,
   ReactiveFormsModule,
  ],
  exports:[

  ]
})
export class PageModule { }
