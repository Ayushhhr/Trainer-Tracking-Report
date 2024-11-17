import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Batch } from '../../../models/Batch';
import { Profile } from '../../../models/Profile';
import { SubTopic } from '../../../models/SubTopic';
import { Topic } from '../../../models/Topic';
import { ProfileServiceService } from '../../../services/profile-service.service';
import { TaughtHoursService } from '../../../services/taught-hours.service';
import { TopicSubtopicServiceService } from '../../../services/topic-subtopic-service.service';

@Component({
  selector: 'app-profile-associated-subtopics',
  templateUrl: './profile-associated-subtopics.component.html',
  styleUrl: './profile-associated-subtopics.component.css'
})
export class ProfileAssociatedSubtopicsComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: TopicSubtopicServiceService,
    private service1: ProfileServiceService,
    private taughthrsService: TaughtHoursService,
    private http: HttpClient
  ) {}

  public batches: Observable<Batch[]> = of([]);
  bid: number = 0;
  searchtext: any;
  taughtHours: number = 0;
  profile: Profile = new Profile();
  profileId: number = 0;
  batchId: number = 0;
  sid: number = 0;
  topicId: number = 0;
  trainerId: number = 0;
  topic: Topic = new Topic();
  subtopic: SubTopic = new SubTopic();
  subtopicsTaughtHours: { [key: number]: number } = {}; // Object to store taught hours for each subtopic
  visit: boolean = true;

  ngOnInit() {
    // Retrieve the profile id and batch id from the route parameter
    this.profileId = this.route.snapshot.params['pid'];
    this.trainerId = this.route.snapshot.params['trainerid'];
    this.batchId = this.route.snapshot.params['bid'];
    this.getAll();

    this.topic = new Topic();
    this.topicId = this.route.snapshot.params['topicid'];
    console.log("TopicID: ", this.topicId);
    this.service.getOneTopic(this.topicId).subscribe((data) => {
      console.log(data);
      this.topic = data;
      console.log("Subtopics: ",this.topic.subtopic);
    });

    // Retrieve batchId from route parameters
    this.bid = this.route.snapshot.params['bid'];
    console.log("Bid: ", this.bid);
  }

  getAll() {
    // Retrieve the profile id from the route parameter
    const profileId = this.route.snapshot.params['pid'];

    console.log("ProfileId: ", profileId);
    this.batches = this.service1.getAssociatedBatches(profileId); // Assign the observable

    console.log(this.batches);
  }

  list() {
    this.router.navigate(['listTopic']);
  }

  TopicDetails(id: string) {
    return this.service.getOneTopic(Number(id)).subscribe((data) => {
      this.topic = data;
      console.log(data);
      console.log(this.topic); 

      this.visit = true;
    });
  }
}
