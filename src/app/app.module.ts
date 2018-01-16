import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatToolbarModule, MatToolbar} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

import { AboutmePageComponent } from './components/aboutme-page/aboutme-page.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ContactsComponent } from './components/contacts/contacts.component';
import { MenuComponent } from './components/menu/menu.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProfesionalPageComponent } from './components/profesional-page/profesional-page.component';
import { PersonalInfoService } from './service/personal-info.service';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProfesionalPageComponent,
    AboutmePageComponent,
    PageNotFoundComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    Angular2FontawesomeModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [ PersonalInfoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
