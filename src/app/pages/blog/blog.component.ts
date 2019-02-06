import { Component, OnInit } from '@angular/core';
import { PostCard } from 'src/app/interfaces/postcard';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  postsArray: PostCard[] = [
    {
      title: 'Temario angular!',
      description: 'esta es una prueba',
      date: '05/05/2019',
      url: 'temario-angular.md'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
