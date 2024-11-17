import { Profile } from "./Profile";
import { Trainer } from "./Trainer";

export class Batch{

    bid:number;
    bname:String;
    creation_date: Date;
    end_date: Date;
    profiles:Profile[];

    constructor()
    {
        this.bid=0;
        this.bname="";
        this.creation_date= new Date();
        this.end_date= new Date();
        this.profiles=[];
    }

}