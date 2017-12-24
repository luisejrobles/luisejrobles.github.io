import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ProfesionalPageComponent } from '../components/profesional-page/profesional-page.component';
import { AboutmePageComponent } from '../components/aboutme-page/aboutme-page.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { ContactsComponent } from '../components/contacts/contacts.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/about-me', pathMatch: 'full' },
  { path: 'about-me', component: AboutmePageComponent },
  { path: 'contact', component: ContactsComponent},
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: 'professional', component: ProfesionalPageComponent },
  { path: '**', redirectTo: 'page-not-found' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})


export class AppRoutingModule { }
