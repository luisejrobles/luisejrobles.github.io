import { Schools } from "./schools";
import { SocialMedia } from "./social-media";
import { Volunteer } from "./volunteer";
import { Talk } from "./talks";
import { Job } from "./jobs";

export interface PersonalInfo {
    hobbies: string;
    img: string;
    jobs: Job[];
    name: string;
    programmingSkills: string[];
    talks: Talk[];
    schools: Schools[];
    shortBio: string[];
    skills: string[];
    socialMedia: SocialMedia;
    volunteer: Volunteer[];
    years: string;
}
