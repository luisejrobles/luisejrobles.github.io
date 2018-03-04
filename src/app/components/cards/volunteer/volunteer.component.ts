import { Component, OnInit } from '@angular/core';
import { PersonalInfoService } from '../../../service/personal-info.service';
import { PersonalInfo } from '../../../models/personal-info/personal-info';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit {
  
  luisejrobles: PersonalInfo;
  
  constructor(private personalInfoService: PersonalInfoService) { }

  ngOnInit() {
    this.luisejrobles = this.personalInfoService.personalInfo;
  }

}
