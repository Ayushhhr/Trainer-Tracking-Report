import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profile } from '../../../models/Profile';
import { Topic } from '../../../models/Topic';
import { ProfileServiceService } from '../../../services/profile-service.service';

@Component({
  selector: 'app-trainer-profile-details',
  templateUrl: './trainer-profile-details.component.html',
  styleUrl: './trainer-profile-details.component.css'
})
export class TrainerProfileDetailsComponent {
  constructor(private route: ActivatedRoute, private router: Router,private service: ProfileServiceService)
  {
    
  }

  pid : number = 0;
  profile : Profile = new Profile();
  bid: number = 0;
  trainerId: number = 0;
  topic : Topic = new Topic();
  ngOnInit()
  {

    this.trainerId = this.route.snapshot.params['trainerid'];
    this.profile = new Profile();

    this.pid = this.route.snapshot.params['pid'];
    console.log("TrainerId:",this.trainerId);
    console.log("ProfileId:",this.pid);

    this.service.getOneProfile(this.pid).subscribe((data) =>{
      console.log(data);
      this.profile = data;
    })
  }
  list()
  {
    this.router.navigate(['listProfile']);
  }

  profileDetails(id : string)
  {
    return this.service.getOneProfile(Number(id)).subscribe((data) =>{
      this.profile = data;
     // console.log(data);
      console.log(this.profile);
      
    })
  }
  topicDetails(pid : number,trainerId : number, topicid: number)
  {
    console.log("Topic Id: ",topicid);
    this.router.navigate(['profileAssociatedSubTopics',trainerId,pid,topicid]);
  }
}
