import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PageRoutingModule } from './page/page-router.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { UserRoutingModule } from './auth/user-router.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { PageModule } from './page/page.module';
import { AuthModule } from './auth/auth.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { appInterceptorProvider } from './app.interceptor';




@NgModule({
  declarations: [AppComponent ],
  imports: [
    CoreModule,
    RouterModule,
    BrowserModule,
    PageModule,
    PageRoutingModule,
    HttpClientModule,
    AuthModule,
    UserRoutingModule,
    FormsModule,
    CommonModule,
    SharedModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [appInterceptorProvider],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
