import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileServiceService } from '../../services/profile-service.service';
import { Profile } from '../../models/Profile';
import { Topic } from '../../models/Topic';
import { Batch } from '../../models/Batch';

@Component({
  selector: 'app-batchwise-trainer-topics',
  templateUrl: './batchwise-trainer-topics.component.html',
  styleUrl: './batchwise-trainer-topics.component.css'
})
export class BatchwiseTrainerTopicsComponent {
  batchName: any;
  batch: any;
  constructor(private route: ActivatedRoute, private router: Router,private service: ProfileServiceService)
  {
    
  }

  id : number = 0;
  bid : number = 0;
  profile : Profile = new Profile();

  topic : Topic = new Topic();
  ngOnInit()
  {
    this.profile = new Profile();

    this.id = this.route.snapshot.params['id'];
    this.bid = this.route.snapshot.params['bid'];

    console.log("Pid: ",this.id);
    console.log("Bid: ",this.bid);

    this.service.getOneProfile(this.id).subscribe((data) =>{
      console.log(data);
      this.profile = data;
    })
  }
  topicDetails(bid: number,id : number)
  {
    console.log("Topic Id: ",id);
    this.router.navigate(['BatchWiseSubtopics',bid,id]);
  }
}
