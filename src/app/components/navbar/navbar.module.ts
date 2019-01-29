import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesModule } from 'src/app/modules/routes.module';
import { NavbarComponent } from './navbar.component';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RoutesModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
