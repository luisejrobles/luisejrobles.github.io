import { Component, OnInit } from '@angular/core';
import { PersonalInfoService } from '../../../service/personal-info.service';
import { PersonalInfo } from '../../../models/personal-info/personal-info';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
 
  luisejrobles: PersonalInfo;
  
  constructor(private personalInfoService: PersonalInfoService) { }

  ngOnInit() {
    this.luisejrobles = this.personalInfoService.personalInfo;
    console.log(this.luisejrobles);
  }

}
