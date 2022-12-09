import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { HomeComponent } from './page/home/home.component';


const routes: Routes = [
  
 {
  path:'',
  pathMatch: 'full',
  component: HomeComponent
 },
 {
  path:'not-found',
  component: NotFoundComponent
 },
{
path: '**',
 redirectTo: '/not-found'
 }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
