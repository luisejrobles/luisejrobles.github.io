import { Injectable } from '@angular/core';
import { PersonalInfo } from '../models/personal-info/personal-info';
import { PersonalInfoData } from '../models/personal-info/personal-info-data';

@Injectable()
export class PersonalInfoService {
  personalInfo: PersonalInfo = {
    name: "Luis Eduardo Jiménez Robles",
    img: "../../assets/personal-img.png",
    shortBio: [
      "Computer Science Engineer",
      "Global Shapers Tijuana Hub member",
      "GitHub Campus Expert",
      "Front End Developer",
      "23 years old",
    ],
    hobbies: `Reading tech articles (Machine Learning, AI, Aerospacial, Cience, Web Development), poetry, sci-fi, history about Mexico, go cycling (about 2 years ago), 
    //                                 go running (whenever I can), food stuff, politics, economy, community development, social improvement
    //                                 financial stuff. 
    //                                 Ocasionally I write about daily stuff, poetry, short stories. Ultimately I appreciate cultural 
    //                                 things like going to museums, watching paintings, exploring urban installations. `,
    schools: [
      {
        name: "Preparatoria Federal Lázaro Cardenas",
        grade: "Computer Technician",
        location:"Tijuana, BC",
        period: "2009-2012",
        achievements: [
          "Leader of my group at 1rst and 2nd semester",
          "Best grades over the 3rd semester"
        ]
      },
      {
        name: "Universidad Autónoma de Baja California",
        grade: "Computer Science Engineer",
        location: "Tijuana, BC",
        period: "2012-2017",
        achievements: [
          "Github Campus Expert at Universidad Autónoma de Baja California.",
          "Creator of Cimadev, a fully student driven tech community.",
          "Curator of Cimadev."
        ],
      }
    ],
    socialMedia: {
      email: "luisejimenezrobles@gmail.com",
      facebookURL: "https://www.facebook.com/luisejrobles",
      githubURL: "https://www.github.com/luisejrobles",
      linkedinURL: "https://www.linkedin.com/me/luisejrobles"
    },
    volunteer: [
      {
        name: "Google Developer Group Tijuana member",
        description: "",
        date: "2012 - 2017"
      },
      {
        name: "We Can Code Hackathon - coach",
        description: "",
        date: ""
      },
      {
        name: "Tijuana Innovadora 2012 - technician volunteer",
        description: "",
        date: ""
      },
      {
        name: "",
        description: "",
        date: ""
      },
      {
        name: "Startup Weekend 2017 High School - coach",
        description: "",
        date: ""
      }
    ],
    years: "23"
  }

  luisejrobles = new PersonalInfoData(this.personalInfo);

  constructor() { }
}
