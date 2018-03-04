import { Component, OnInit } from '@angular/core';
import { PersonalInfo } from '../../../models/personal-info/personal-info';
import { PersonalInfoService } from '../../../service/personal-info.service';

@Component({
  selector: 'app-talks',
  templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.css']
})
export class TalksComponent implements OnInit {
  luisejrobles: PersonalInfo;

  constructor( private personalInfoService: PersonalInfoService) { }

  ngOnInit() {
    this.luisejrobles = this.personalInfoService.personalInfo;
  }

}
