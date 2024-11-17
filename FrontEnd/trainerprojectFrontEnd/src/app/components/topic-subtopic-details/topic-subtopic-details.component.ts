import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TopicSubtopicServiceService } from '../../services/topic-subtopic-service.service';
import { Topic } from '../../models/Topic';

@Component({
  selector: 'app-topic-subtopic-details',
  templateUrl: './topic-subtopic-details.component.html',
  styleUrl: './topic-subtopic-details.component.css'
})
export class TopicSubtopicDetailsComponent {

  constructor(private route: ActivatedRoute, private router: Router,private service: TopicSubtopicServiceService)
  {
    
  }

  tid : number = 0;
  topic : Topic = new Topic();
  visit : boolean = true;
  ngOnInit()
  {
    this.topic = new Topic();

    this.tid = this.route.snapshot.params['tid'];

    this.service.getOneTopic(this.tid).subscribe((data) =>{
      console.log(data);
      this.topic = data;
    })
  }
  list()
  {
    this.router.navigate(['listTopic']);
  }

  TopicDetails(id : string)
  {
    return this.service.getOneTopic(Number(id)).subscribe((data) =>{
      this.topic = data;
      console.log(data);
      console.log(this.topic);

      this.visit = true;
    })
  }
  subtopicDetails(id : number)
  {
    console.log("inside method");
    this.router.navigate([`detailsTopicSubtopic`,id]);
  }
}
