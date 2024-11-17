import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileServiceService } from '../../../services/profile-service.service';
import { Profile } from '../../../models/Profile';
import { Topic } from '../../../models/Topic';

@Component({
  selector: 'app-one-profile-details',
  templateUrl: './one-profile-details.component.html',
  styleUrl: './one-profile-details.component.css'
})
export class OneProfileDetailsComponent {
  constructor(private route: ActivatedRoute, private router: Router,private service: ProfileServiceService)
  {
    
  }

  pid : number = 0;
  bid : number = 0;
  trainerId : number = 0;
  profile : Profile = new Profile();

  topic : Topic = new Topic();
  ngOnInit()
  {
    this.profile = new Profile();

    this.pid = this.route.snapshot.params['pid'];
    this.bid = this.route.snapshot.params['bid'];
    this.trainerId = this.route.snapshot.params['trainerid'];

    console.log("Pid: ",this.pid);
    console.log("Bid: ",this.bid);

    this.service.getOneProfile(this.pid).subscribe((data) =>{
      console.log(data);
      this.profile = data;
    })
  }
  topicDetails(trainerId: number,pid: number,bid: number,topicId : number)
  {
    console.log("Topic Id: ",topicId);
    this.router.navigate(['associatedSubTopics',trainerId,pid,bid,topicId]);
  }
}
