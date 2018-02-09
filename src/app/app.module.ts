import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import {MatToolbarModule, MatToolbar} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';

import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatStepperModule} from '@angular/material/stepper';

import { AboutmePageComponent } from './components/aboutme-page/aboutme-page.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { MenuComponent } from './components/menu/menu.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProfesionalPageComponent } from './components/profesional-page/profesional-page.component';
import { PersonalInfoService } from './service/personal-info.service';
import { BioCardComponent } from './components/bio-card/bio-card.component';
import { EducationComponent } from './components/cards/education/education.component';
import { VolunteerComponent } from './components/cards/volunteer/volunteer.component';
import { TalksComponent } from './components/cards/talks/talks.component';
import { GeneralInfoComponent } from './components/cards/general-info/general-info.component';
import { JobsComponent } from './components/cards/jobs/jobs.component';
import { AwardsComponent } from './components/cards/awards/awards.component';



@NgModule({
  declarations: [
    AboutmePageComponent,
    AppComponent,
    BioCardComponent,
    EducationComponent,
    MenuComponent,
    ProfesionalPageComponent,
    PageNotFoundComponent,
    VolunteerComponent,
    TalksComponent,
    GeneralInfoComponent,
    JobsComponent,
    AwardsComponent,
  ],
  imports: [
    Angular2FontawesomeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatListModule,
    MatStepperModule,
    MatToolbarModule,
  ],
  providers: [ PersonalInfoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
