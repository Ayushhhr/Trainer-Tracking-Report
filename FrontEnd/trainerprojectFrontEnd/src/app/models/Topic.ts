import { SubTopic } from "./SubTopic";

export class Topic{

    tid:number;
    tname:string;
    hours:string;

    subtopic: SubTopic[];

    constructor()
    {
        this.tid=0;
        this.tname="";
        this.hours="";
        this.subtopic=[];
    }
}