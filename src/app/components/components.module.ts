import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from './navbar/navbar.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    NavbarModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class ComponentsModule { }
