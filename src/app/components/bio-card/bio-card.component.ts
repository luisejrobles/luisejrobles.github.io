import { Component, OnInit } from '@angular/core';
import { PersonalInfoService } from '../../service/personal-info.service';
import { PersonalInfo } from '../../models/personal-info/personal-info';

@Component({
  selector: 'app-bio-card',
  templateUrl: './bio-card.component.html',
  styleUrls: ['./bio-card.component.css']
})
export class BioCardComponent implements OnInit {
  luisejrobles: PersonalInfo;
  
  constructor( private personalInfoService: PersonalInfoService ) { }

  ngOnInit() {
    this.luisejrobles = this.personalInfoService.personalInfo; 
  }

}
