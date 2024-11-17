import { Topic } from "./Topic";

export class Profile
{
    [x: string]: any;

    id : number;
    firstName : String;
    lastName : String;
    mobNum : number;
    email : string;
    address : String;

    topics:Topic[];

    constructor()
    {
        this.id = 0;
        this.firstName = "";
        this.lastName = "";
        this.mobNum = 0;
        this.email = "";
        this.address = "";
        this.topics=[];
    }
}