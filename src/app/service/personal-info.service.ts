import { Injectable } from '@angular/core';
import { PersonalInfo } from '../models/personal-info/personal-info';
import { PersonalInfoData } from '../models/personal-info/personal-info-data';

@Injectable()
export class PersonalInfoService {
  personalInfo: PersonalInfo = {
    name: "Luis Eduardo Jiménez Robles",
    img: "../../assets/personal-img.png",
    hobbies: `Reading tech articles (Machine Learning, AI, Aerospacial, Cience, Web Development), poetry, sci-fi, history about Mexico, go cycling (about 2 years ago), 
    //                                 go running (whenever I can), food stuff, politics, economy, community development, social improvement
    //                                 financial stuff. 
    //                                 Ocasionally I write about daily stuff, poetry, short stories. Ultimately I appreciate cultural 
    //                                 things like going to museums, watching paintings, exploring urban installations. `,
    schools: [
      {
        name: "Preparatoria Federal Lázaro Cardenas",
        location:"Tijuana, BC",
        period: "2009-2012",
        achievements: [
          "Leader of my group at 1rst and 2nd semester",
          "Best grades over the 3rd semester"
        ]
      },
      {
        name: "Universidad Autónoma de Baja California",
        location: "Tijuana, BC",
        period: "2012-2017",
        achievements: [
          "",

        ],
      }
    ],
    socialMedia: {
      facebookURL: "https://www.facebook.com/luisejrobles",
      githubURL: "https://www.github.com/luisejrobles",
      linkedinURL: "https://www.linkedin.com/me/luisejrobles"
    },
    years: "23",
    favoriteBooks : [
      {name: "20,000 leagues under the sea", author: "Julio Verne"},
      {name: "El país de uno", author: "Denisse Dresser"}
    ]
  }

  luisejrobles = new PersonalInfoData(this.personalInfo);

  constructor() { }
}
