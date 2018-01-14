import { Schools } from "./schools";
import { SocialMedia } from "./social-media";
import { Books } from "./books";

export interface PersonalInfo {
    name: string;
    img: string;
    hobbies: string;
    schools: Schools[];
    socialMedia: SocialMedia;
    years: string;
    favoriteBooks: Books[];
}
