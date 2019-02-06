import { Component, OnInit, Input } from '@angular/core';
import { PostCard } from 'src/app/interfaces/postcard';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  @Input() post: PostCard;

  constructor() { }

  ngOnInit() {
  }

}
