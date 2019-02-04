import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesModule } from 'src/app/modules/routes.module';
import { NavbarComponent } from './navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RoutesModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
