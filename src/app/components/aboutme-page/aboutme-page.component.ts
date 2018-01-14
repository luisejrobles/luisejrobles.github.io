import { Component, OnInit } from '@angular/core';
import { PersonalInfoData } from '../../models/personal-info/personal-info-data';
import { PersonalInfoService } from '../../service/personal-info.service';

@Component({
  selector: 'app-aboutme-page',
  templateUrl: './aboutme-page.component.html',
  styleUrls: ['./aboutme-page.component.css']
})
export class AboutmePageComponent implements OnInit {
  luisejrobles: PersonalInfoData;

  constructor(private personalInfoService: PersonalInfoService) { }

  ngOnInit() {
    this.luisejrobles = this.personalInfoService.luisejrobles;
  }

}
