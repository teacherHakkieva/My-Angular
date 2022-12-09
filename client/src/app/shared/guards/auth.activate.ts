import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthActivate implements CanActivate {
  token: string | null = localStorage.getItem('token')
    constructor(private authService: AuthService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const { authenticationRequired, onlyGuest } = route.data;
    if (authenticationRequired == true && this.token != null) {
      return true
    } else if (onlyGuest === true && this.token == null) {
      return true
    }else {
      return this.router.parseUrl('/')
    }

  }
}
