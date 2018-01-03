import { PersonalInfo } from "./personal-info";
import { Books } from './books';

export class PersonalInfoData {

    personalInfo: PersonalInfo;
    
    constructor() {
        this.personalInfo.name = "Luis Eduardo Jiménez Robles";
        this.personalInfo.years = "23";
        this.personalInfo.hobbies = `Reading tech articles (Machine Learning, AI, Aerospacial, Cience, Web Development), poetry, sci-fi, history about Mexico, go cycling (about 2 years ago), 
                                    go running (whenever I can), food stuff, politics, economy, community development, social improvement
                                    financial stuff. 
                                    Ocasionally I write about daily stuff, poetry, short stories. Ultimately I appreciate cultural 
                                    things like going to museums, watching paintings, exploring urban installations. `;
        this.personalInfo.favoriteBooks = [
            new Books
        ]
        //Social media links
        this.personalInfo.socialMedia.facebookURL = "/luisejrobles";
        this.personalInfo.socialMedia.githubURL = "/luisejrobles";
        this.personalInfo.socialMedia.linkedinLURL = "/luisejrobles";



     }

    
    
    
}
