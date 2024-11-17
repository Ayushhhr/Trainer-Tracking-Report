import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileServiceService } from '../../../services/profile-service.service';
import { Profile } from '../../../models/Profile';
import { Topic } from '../../../models/Topic';

@Component({
  selector: 'app-one-batch-details',
  templateUrl: './one-batch-details.component.html',
  styleUrl: './one-batch-details.component.css'
})
export class OneBatchDetailsComponent {
  constructor(private route: ActivatedRoute, private router: Router,private service: ProfileServiceService)
  {
    
  }

  id : number = 0;
  profile : Profile = new Profile();
  tid : number = 0;

  topic : Topic = new Topic();
  ngOnInit()
  {
    this.profile = new Profile();

    this.id = this.route.snapshot.params['id'];
    this.tid = this.route.snapshot.params['tid'];

    this.service.getOneProfile(this.id).subscribe((data) =>{
      console.log(data);
      this.profile = data;
    })
  }
  list()
  {
    this.router.navigate(['listProfile']);
  }

  topicDetails(tid: number, id : number)
  {
    console.log("Trainer Id: ",tid);
    console.log("Topic Id: ",id);
    this.router.navigate(['associatedSubTopics',tid,id]);
  }
}
