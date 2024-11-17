import { SubTopic } from "./SubTopic";
import { Batch } from "./Batch";

export class TrainerSubTopicAssocication{
    
    id:number;
    batch:Batch;
    subtopic:SubTopic;

    constructor()
    {
        this.id=0;
        this.batch= new Batch(); 
        this.subtopic= new SubTopic();
    }

}