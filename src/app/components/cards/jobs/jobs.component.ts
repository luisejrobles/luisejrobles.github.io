import { Component, OnInit } from '@angular/core';
import { PersonalInfo } from '../../../models/personal-info/personal-info';
import { PersonalInfoService } from '../../../service/personal-info.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  luisejrobles: PersonalInfo;
  constructor( private personalInfoService: PersonalInfoService) { }

  ngOnInit() {
    this.luisejrobles = this.personalInfoService.personalInfo;
  }

}
