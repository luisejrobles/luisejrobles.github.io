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
  resumeURL = "https://github.com/luisejrobles/luisejrobles.github.io/blob/master/src/assets/Resume.pdf"

  menuButtons: MenuInterface[] = [
    {name: 'ABOUT', route: '/about-me'},
    {name: 'PROFESSIONAL', route: '/professional'}
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  checkButton(button: MenuInterface) {
    this.route = button.route;
    console.log(this.route);
    this.router.navigate([this.route]);
  }

  openPDF() {
    var blob = new Blob(["../../../assets/Resume"], { type: 'application/pdf' });
    var fileURL = URL.createObjectURL(blob);
    window.open(fileURL);
  }

}
