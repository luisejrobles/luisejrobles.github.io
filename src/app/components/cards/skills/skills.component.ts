import { Component, OnInit } from '@angular/core';
import { PersonalInfo } from '../../../models/personal-info/personal-info';
import { PersonalInfoService } from '../../../service/personal-info.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  luisejrobles: PersonalInfo;
  constructor( private personalInfoService: PersonalInfoService) { }

  ngOnInit() {
    this.luisejrobles = this.personalInfoService.personalInfo;
  }

}
