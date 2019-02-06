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
      title: 'Hola CDMX!',
      description: 'esta es una prueba',
      date: '05/05/2019',
      url: 'lksjklj'
    },
    {
      title: 'Test test test',
      description: 'esta es una prueba',
      date: '05/05/2019',
      url: 'lksjklj'
    },
    {
      title: 'Test test test',
      description: 'esta es una prueba',
      date: '05/05/2019',
      url: 'lksjklj'
    },
    {
      title: 'Test test test',
      description: 'esta es una prueba',
      date: '05/05/2019',
      url: 'lksjklj'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
