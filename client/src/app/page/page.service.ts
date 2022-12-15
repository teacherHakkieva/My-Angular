import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICourse } from '../shared/interfaces/course';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const apiURL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class PageService {
course: null |ICourse | undefined

  constructor(private http: HttpClient) { }
  
  getReacent(){
    return this.http.get<ICourse[]>(`${apiURL}/`,{withCredentials: true})
  }
  addCourse(data:{}){
    return this.http.post<ICourse>(`${apiURL}/courses`, data,{withCredentials: true})
  }
  getAllCourses(){
    return this.http.get<ICourse[]>(`${apiURL}/courses`,{withCredentials: true})
  }
  getCourse(id: string){
    return this.http.get<ICourse>(`${apiURL}/courses/${id}`,{withCredentials: true})
  }
  editCourse(id: string|undefined, data:{}){
    return this.http.put<ICourse>(`${apiURL}/courses/${id}`, data,{withCredentials: true})
  }
  deleteCourse(id: string|undefined){
    return this.http.delete<ICourse>(`${apiURL}/courses/${id}`,{withCredentials: true})
  }
  addEnrolll(id: string|undefined){
    return this.http.get(`${apiURL}/courses/enroll/${id}`)
  }

}
