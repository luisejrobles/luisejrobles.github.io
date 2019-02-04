import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { JumbotronComponent } from './sections/jumbotron/jumbotron.component';
import { AboutMeComponent } from './sections/about-me/about-me.component';
import { TextCardModule } from 'src/app/components/text-card/text-card.module';

@NgModule({
  declarations: [
    HomeComponent,
    JumbotronComponent,
    AboutMeComponent],
  imports: [
    CommonModule,
    TextCardModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
