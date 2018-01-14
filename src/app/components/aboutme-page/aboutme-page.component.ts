import { Component, OnInit } from '@angular/core';
import { PersonalInfoData } from '../../models/personal-info/personal-info-data';

@Component({
  selector: 'app-aboutme-page',
  templateUrl: './aboutme-page.component.html',
  styleUrls: ['./aboutme-page.component.css']
})
export class AboutmePageComponent implements OnInit {

  me = new PersonalInfoData;
  constructor() { 
  }

  ngOnInit() {
  }

}
