import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IUser } from '../shared/interfaces/user';
import { ICourse } from '../shared/interfaces/course';

const apiURL = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: null | IUser | undefined;
  course: null|ICourse| undefined;
  
  constructor(private http: HttpClient) {}

  get isLoggedIn(){
    if(this.user){
      return true
    }else{
      return false
    }
  }
  
  register(data: {}){
     return this.http.post<IUser>(`${apiURL}/users/register`, data).pipe(
      tap((user) => {
        this.user = user
        localStorage.setItem('token', this.user.accessToken)
      })
    )
  }

  login(data: {}) {    
    return this.http.post<IUser>(`${apiURL}/users/login`, data).pipe(
      tap((user) => {
        this.user = user;
        localStorage.setItem('token', this.user.accessToken);
        
      })
    )
  }
  profile(){
    return this.http.get<ICourse[]>(`${apiURL}/courses`, {withCredentials: true})
  
  } 
  
  logout() {
    this.user = null;
    return localStorage.removeItem('token');
  }
}
