import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from "rxjs";
import { ApiService } from "src/app/api.service";
import { ICourse } from "../../shared/interfaces/course";

@Injectable({
    providedIn: 'root'
})

export class CourseResolver implements Resolve<ICourse | null>{
    constructor(private apiService:ApiService, private router:Router){

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ICourse |null | Observable<ICourse> | Promise<ICourse> {
       const courseId = route.params['id'];
             console.log(courseId);
             
       if(!courseId){
        this.router.navigate(['/courses']);
        return null;
       }
       return this.apiService.loadCourse(courseId)
    }
}