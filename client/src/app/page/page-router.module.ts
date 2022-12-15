import { compileNgModule } from '@angular/compiler';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseResolver } from './resolvers/course.resolver';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { AuthActivate } from '../shared/guards/auth.activate';

const router: Routes = [
     {
        path: 'search',
        component: SearchComponent,
        canActivate:[AuthActivate],
        data:{
          loginRequired:true
        }
         }, 
      {
        path: 'courses',
        component: CoursesComponent,
        canActivate:[AuthActivate],
        data:{
          loginRequired:true
        }
        
      },   
      {
        path: 'courses/:id',
        component: DetailsComponent,
        canActivate:[AuthActivate],
        data:{
          loginRequired:true
        }
        
      },
      {
        path: 'create',
        component: CreateCourseComponent,
        canActivate:[AuthActivate],
        data:{
          loginRequired:true
        }
        
      }, 
     
      
      {
        path: 'courses/edit/:id',
        component: EditComponent,
        canActivate:[AuthActivate],
        data:{
          loginRequired:true
        }
        
      }, 
    
     
      
{
        path: '',
        component: HomeComponent,
      }, 
      
];
@NgModule({
  imports: [RouterModule.forChild(router)],
  exports: [RouterModule],
})
export class PageRoutingModule {}
