import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserRoutingModule } from './user-router.module';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    LogoutComponent,
  
  ],
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    FormsModule,
    UserRoutingModule,
    
    
  ],
  exports: [LoginComponent,ProfileComponent,],
})
export class AuthModule {}
