import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { JumbotronComponent } from './sections/jumbotron/jumbotron.component';

@NgModule({
  declarations: [HomeComponent, JumbotronComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
