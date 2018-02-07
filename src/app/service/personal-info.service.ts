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
    talks: [
      {
        name: "Git and Github Intro Workshop",
        description: "An introductory workshop using git and Github as tools for software development.",
        date: "December 2017",
        event: "Virtua Fest 2017",
        location: "Durango, Mexico."
      },
      {
        name: "Intro to Project Tango",
        description: "An Introduction in Project Tango by Google, what can people create, how do they use it and more.",
        date: "June 2016",
        event: "GAFE G Suite Introductory workshop",
        location: "Tijuana, Mexico."
      },
      {
        name: "Intro to Project Tango",
        description: "An Introduction in Project Tango by Google, what can people create, how do they use it and more.",
        date: "June 2016",
        event: "GAFE G Suite Introductory workshop",
        location: "Tijuana, Mexico."
      },
      
    ],
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
      email: "mailto:luisejimenezrobles@gmail.com",
      facebookURL: "https://www.facebook.com/luisejrobles",
      githubURL: "https://www.github.com/luisejrobles",
      linkedinURL: "https://www.linkedin.com/in/luisejrobles/"
    },
    volunteer: [
      {
        name: "Google Developer Group Tijuana [organizer member]",
        description: `GDG Tijuana it's an official Google Tech community 
        where people exchange ideas, knowledge, projects and more. 
        As part of it, I was in charge of creating and organizing new events in Tijuana, Mexico.
        Developed a strong sense and hability for logistics and organization as we ran  
        DevFest and Google IO Extended events, both are mid/large scale events where nearly 100 - 150 people attend.
        Also as part of GDG for nearly 5 years, I gave different talks and workshops on meetups and companies 
        where the point was to share my knowledge and create a more united tech community.
        `,
        date: "2012 - 2017"
      },
      {
        name: "We Can Code Hackathon [coach]",
        description: `We Can Code Hackathon is the most important hackathon in Baja and it's held in Ensenada Mexico
        year after year, MLH and We Can Code organizations are sponsors of the event among other impontant ones. 
        I had the oportunity to attend as a mentor to share my knowledge with the participants and give them ideas how 
        they could implement their project.`,
        date: "2015"
      },
      {
        name: "Tijuana Innovadora 2012 as [technician volunteer]",
        description: `One of the most important event in Baja for showcasing technology and industry potential of Baja California to the world, 
        known as a massive event where nearly 5000 persons attend per day with a duration of two full weeks of workshops, exhibitions and talks
        with the participation of characters like Steve Wozniak (Co-founder of Apple), Blake Mycoskie (ex CEO of Toms), and many more.  
        I was in charge of the technical area, coordinating the camera persons, switching slides, coordinating lights, making sure every device in the theater was working
        correctly.`,
        date: "2012"
      },
      {
        name: "Startup Weekend 2017 High School [coach]",
        description: `An iniciative by Tech Stars where young people can learn from expertise people about startups, bussiness, tech and more with
        a duration of 2 days where participants learned how they can create effective, well structured startups and manage them.
        Was invited because of my experience with tech and my startup GAFE Tijuana where I gave courses and capacitations to schools to help them implement
        Google Suite for Education.`,
        date: "2017"
      }
    ],
    years: "23"
  }

  luisejrobles = new PersonalInfoData(this.personalInfo);

  constructor() { }
}
