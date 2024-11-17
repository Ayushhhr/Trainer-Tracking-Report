import { Course } from "./Course";
import { Profile } from "./Profile";

export class Trainer{

    id:number;
    username:string;
    password:string;

    course:Course[];
    profile: Profile | null;
    //profile: { [key: string]: Profile } = {}; // Initialize as an empty object

    constructor()
    {
        this.id=0;
        this.username="";
        this.password="";
        this.course=[];
        this.profile = null; // Initialize as null
    }

}