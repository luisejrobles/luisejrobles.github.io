import { Component, OnInit } from '@angular/core';
import { MenuInterface } from '../../models/menu/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  route:string;

  menuButtons: MenuInterface[] = [
    {name: 'About me', route: '/about-me'},
    {name: 'Professional', route: '/professional'}
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  checkButton(button: MenuInterface) {
    this.route = button.route;
    console.log(this.route);
    this.router.navigate([this.route]);
  }

}
