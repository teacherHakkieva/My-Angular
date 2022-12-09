import { compileNgModule } from '@angular/compiler';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthActivate } from '../shared/guards/auth.activate';

const router: Routes = [
  {
    path: 'auth/login',
    component: LoginComponent,
  },
  {
    path: 'auth/register',
    component: RegisterComponent,
    
  },
  {
    path: 'auth/profile',
    component: ProfileComponent,
   
   
  },
  {
    path: 'auth/logout',
    component: LogoutComponent,
       
  },
];
@NgModule({
  imports: [RouterModule.forChild(router)],
  exports: [RouterModule],
})
export class UserRoutingModule  {}
