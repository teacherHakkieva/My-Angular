import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ICourse } from './shared/interfaces/course';

const apiURL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient) { }

  loadCourses(){
    return this.httpClient.get<ICourse[]>(`${apiURL}/courses`)
  }
  loadCourse(id:string){
    return this.httpClient.get<ICourse>(`${apiURL}/courses/${id}`, {withCredentials: true})
  }
  
  loadHomeCourses(limit?:number){
    return this.httpClient.get<ICourse[]>(`${apiURL}/courses${limit ? `?limit={limit}` : ``}`)
  }

  editCourse(id:string | undefined, data: {}){
    return this.httpClient.put<ICourse>(`${apiURL}/courses/${id}/edit`, data)
  }

  deleteCourse(id:string|undefined){
    return this.httpClient.delete(`${apiURL}/course/${id}`)
  }
}
