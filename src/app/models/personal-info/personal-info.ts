import { Schools } from "./schools";
import { SocialMedia } from "./social-media";
import { Volunteer } from "./volunteer";
import { Talk } from "./talks";

export interface PersonalInfo {
    hobbies: string;
    img: string;
    name: string;
    talks: Talk[];
    schools: Schools[];
    shortBio: string[];
    socialMedia: SocialMedia;
    volunteer: Volunteer[];
    years: string;
}
