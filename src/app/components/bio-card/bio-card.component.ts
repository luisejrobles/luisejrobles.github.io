import { Component, OnInit } from '@angular/core';
import { PersonalInfoService } from '../../service/personal-info.service';

@Component({
  selector: 'app-bio-card',
  templateUrl: './bio-card.component.html',
  styleUrls: ['./bio-card.component.css']
})
export class BioCardComponent implements OnInit {

  constructor( private personalInfoService: PersonalInfoService ) { }

  ngOnInit() {
  }

}
