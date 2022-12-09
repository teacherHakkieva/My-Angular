import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent} from './not-found/not-found.component'
import { AuthActivate } from '../shared/guards/auth.activate';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule

  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent
  ],
  providers:[AuthActivate]
})
export class CoreModule { }
