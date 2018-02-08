import { Component, OnInit } from '@angular/core';
import { PersonalInfoService } from '../../../service/personal-info.service';
import { PersonalInfo } from '../../../models/personal-info/personal-info';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.css']
})
export class GeneralInfoComponent implements OnInit {
  luisejrobles: PersonalInfo;
  constructor(private personalInfoService: PersonalInfoService) { }

  ngOnInit() {
    this.luisejrobles = this.personalInfoService.personalInfo;
  }

}
