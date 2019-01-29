import { Component, OnInit } from '@angular/core';
import { Route } from 'src/app/interfaces/route';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  routes: Route[] = [
    { name: 'home', route: 'home'},
    { name: 'blog', route: 'blog'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
