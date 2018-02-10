import { Injectable } from '@angular/core';
import { PersonalInfo } from '../models/personal-info/personal-info';
import { PersonalInfoData } from '../models/personal-info/personal-info-data';

@Injectable()
export class PersonalInfoService {
  personalInfo: PersonalInfo = {
    name: "Luis Eduardo Jiménez Robles",
    img: "../../assets/personal-img.png",
    jobs: [
      {
        companyName: "GPOMCT",
        career: "Software Developer and Project Manager",
        jobDescription: `Entered as Junior Software Developer designing and creating platforms but after months,
        I was given the task of Project Manager because of my oganizative skills. 
        Creating the user stories, product backlog, sprint planning, performance of the SCRUM team and more is
        what I'm in charge.`,
        period: "2017 - to date",
        skills: `Python, Angular 2, PubNub, Organizational Flow, Git Flow, 
        Raspberry Pi, Information Flow, Nodejs, Typescript, Adobe XD, RxJS,
        IoT commands and live tracking, SCRUM implementation, CSS, HTML, JS.`
      },
      {
        companyName: "Proyectos UABC",
        career: "Software developer",
        jobDescription: `Choosen by a teacher with the purpose of creating a team of talented developers to start begin a
        real company project, was part of the team where we developed a real time tracking platform for devices and cellphones.
        The platform was a  successful private project at the company because of the performance and how we designed the project. `,
        period: "2016 - 2017",
        skills: "Polymer, CSS, JS, Nodejs, Amcharts, Python, Qt, Material Design"
      },
      {
        companyName: "Tecnova",
        career: "Customer Software Support and Jr. Engineer",
        jobDescription: `My first contact with applied technology as a professional was installing, updating and managing Smart Boards. Devices
        which I installed at schools and companies. Also I was in charge of giving support to clients and prospects, shaping offers and designing
        UI for a side bussiness where we used Crestron devices.`,
        period: "2013 - 2017",
        skills: `Crestron platform, organizative work, hardware support,
        hardware installation, software development.` 
      },
    ],
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
    programmingSkills: [
      "Python","C", "Java", "Javascript", "Typescript", "ASM x86", "Arduino", "Raspberry Pi",
      "PubNub", "Ionic", "Angular 5"
    ],
    talks: [
      {
        name: "Git and Github Intro Workshop",
        description: "An introductory workshop using git and Github as tools for software development.",
        date: "Dec 2017",
        event: "Virtua Fest 2017",
        location: "Durango, Mexico."
      },
      {
        name: "Intro to Project Tango",
        description: "An Introduction in Project Tango by Google, what can people create, how do they use it and more.",
        date: "Jun 2016",
        event: "GAFE G Suite Introductory workshop",
        location: "Tijuana, Mexico."
      },
      {
        name: "Intro to Project Tango",
        description: "An Introduction in Project Tango by Google, what can people create, how do they use it and more.",
        date: "Jun 2016",
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
    skills: [
      "Respectful", "Organized", "Communicative", "Commited", "Responsible", "Friendly", "Stress proof"
    ],
    socialMedia: {
      email: "mailto:luisejimenezrobles@gmail.com",
      facebookURL: "https://www.facebook.com/luisejrobles",
      githubURL: "https://www.github.com/luisejrobles",
      linkedinURL: "https://www.linkedin.com/in/luisejrobles/"
    },
    volunteer: [
      {
        name: "Google Developer Group Tijuana",
        role: "Organizing member",
        description: `GDG Tijuana it's an official Google Tech community
        where people exchange ideas, knowledge, projects and more. 
        As part of it, I was in charge of creating and organizing new events and in between
        I developed a strong sense and hability for logistics and organization as we we're running
        events like DevFest and Google IO Extended, both are mid/large scale events where nearly 80-150 people attend every year.
        Also as part of GDG for nearly 5 years, I gave different talks and workshops at different events and companies.
        `,
        date: "2012 - 2017"
      },
      {
        name: "Startup Weekend 2017 High School",
        role: "Coach",
        description: `An iniciative by Tech Stars where young people can learn from expertise people about startups, bussiness, tech and more with
        a duration of 2 days where participants learned how they can create effective, well structured startups and manage them.
        Was invited because of my experience with tech and my startup GAFE Tijuana where I gave courses and capacitations to schools to help them implement
        Google Suite for Education.`,
        date: "2017"
      },
      {
        name: "We Can Code Hackathon",
        role: "Coach",
        description: `We Can Code Hackathon is the most important hackathon in Baja and it's held in Ensenada Mexico
        yearly, MLH and We Can Code organizations are sponsors of the event among other impontant ones. 
        I had the oportunity to attend as a mentor to share my knowledge with the participants and give them ideas how 
        they could implement their project.`,
        date: "2015"
      },
      {
        name: "Tijuana Innovadora 2012",
        role: "Technician volunteer",
        description: `One of the most important event in Baja for showcasing technology and industry potential of Baja California to the world, 
        known as a massive event where nearly 5000 persons attend per day with a duration of two full weeks of workshops, exhibitions and talks
        with the participation of characters like Steve Wozniak (Co-founder of Apple), Blake Mycoskie (ex CEO of Toms), and many more.  
        I was in charge of the technical area, coordinating the camera persons, switching slides, coordinating lights, making sure every device in the theater was working
        correctly.`,
        date: "2012"
      }
    ],
    years: "23"
  }

  luisejrobles = new PersonalInfoData(this.personalInfo);

  constructor() { }
}
