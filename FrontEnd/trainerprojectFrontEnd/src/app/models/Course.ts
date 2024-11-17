import { Topic } from "./Topic";

export class Course{

    cid: number;
    cname: String;

    topic:Topic[];

    constructor()
    {
            this.cid=0;
            this.cname="";
            this.topic=[];
    }
}