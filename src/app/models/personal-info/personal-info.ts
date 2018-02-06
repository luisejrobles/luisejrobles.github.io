import { Schools } from "./schools";
import { SocialMedia } from "./social-media";
import { Volunteer } from "./volunteer";

export interface PersonalInfo {
    hobbies: string;
    img: string;
    name: string;
    schools: Schools[];
    shortBio: string[];
    socialMedia: SocialMedia;
    years: string;
    volunteer: Volunteer[];
}
