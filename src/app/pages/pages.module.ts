import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BlogModule } from './blog/blog.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    HomeModule
  ],
  exports: [
    HomeComponent,
    PageNotFoundComponent
  ]
})
export class PagesModule { }
