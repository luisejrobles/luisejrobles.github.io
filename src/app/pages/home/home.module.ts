import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { JumbotronComponent } from './sections/jumbotron/jumbotron.component';
import { AboutMeComponent } from './sections/about-me/about-me.component';

@NgModule({
  declarations: [
    HomeComponent,
    JumbotronComponent,
    AboutMeComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
