import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TopicSubtopicServiceService } from '../../services/topic-subtopic-service.service';
import { ProfileServiceService } from '../../services/profile-service.service';
import { TaughtHoursService } from '../../services/taught-hours.service';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Batch } from '../../models/Batch';
import { Profile } from '../../models/Profile';
import { Topic } from '../../models/Topic';
import { SubTopic } from '../../models/SubTopic';

@Component({
  selector: 'app-batchwise-trainer-subtopics',
  templateUrl: './batchwise-trainer-subtopics.component.html',
  styleUrl: './batchwise-trainer-subtopics.component.css'
})
export class BatchwiseTrainerSubtopicsComponent {
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
  tid: number = 0;
  topic: Topic = new Topic();
  subtopic: SubTopic = new SubTopic();
  subtopicsTaughtHours: { [key: number]: number } = {}; // Object to store taught hours for each subtopic
  //visit: boolean = true;

  ngOnInit() {
    // Retrieve the profile id and batch id from the route parameter
    this.profileId = this.route.snapshot.params['id'];
    this.batchId = this.route.snapshot.params['bid'];
    this.getAll();

    this.topic = new Topic();
    this.tid = this.route.snapshot.params['id'];
    console.log("TopicID: ", this.tid);
    this.service.getOneTopic(this.tid).subscribe((data) => {
      console.log(data);
      this.topic = data;
      console.log("Subtopics: ",this.topic.subtopic);

      // Fetch taught hours for each subtopic
      this.topic.subtopic.forEach((subtopic: SubTopic) => {
        console.log("Subtopic ID:", subtopic.sid);

        // Call getTaughtHours method for each subtopic id
        this.taughthrsService.getTaughtHours(this.batchId, subtopic.sid).subscribe(
          (hours: number) => {
            console.log("Fetched Hours for Subtopic " + subtopic.sid + ": ", hours);
            this.subtopicsTaughtHours[subtopic.sid] = hours; // Store taught hours for the current subtopic
          },
          (error) => {
            console.error('Error fetching taught hours:', error);
          }
        );
      });
    });

    // Retrieve batchId from route parameters
    this.bid = this.route.snapshot.params['bid'];
    console.log("Bid: ", this.bid);

    this.calculateTaughtHours();
  }

  getAll() {
    // Retrieve the profile id from the route parameter
    const profileId = this.route.snapshot.params['id'];

    console.log("ProfileId: ", profileId);
    this.batches = this.service1.getAssociatedBatches(profileId); // Assign the observable

    console.log(this.batches);
  }

  calculateTaughtHours() {
    this.topic.subtopic.forEach((subtopic: SubTopic) => {
      this.taughthrsService.getTaughtHours(this.topic.tid, subtopic.sid).subscribe(
        (hours: number) => {
          this.subtopicsTaughtHours[subtopic.sid] = hours;
        },
        (error) => {
          console.error('Error fetching taught hours:', error);
        }
      );
    });
  }

  getTotalGivenHours(): number {
    let totalHours = 0;
    this.topic.subtopic.forEach((subtopic: SubTopic) => {
      totalHours += Number(subtopic.shours); // Convert to number
    });
    return totalHours;
  }
  
  getTotalCompletedHours(): number {
    let totalHours = 0;
    for (const key in this.subtopicsTaughtHours) {
      if (this.subtopicsTaughtHours.hasOwnProperty(key)) {
        totalHours += Number(this.subtopicsTaughtHours[key]); // Convert to number
      }
    }
    return totalHours;
  }

  // Methods to calculate extra hours and hours needed to complete
  getExtraHours(subtopic: SubTopic): number {
    const completedHours = this.subtopicsTaughtHours[subtopic.sid] || 0;
    const givenHours = Number(subtopic.shours);
    return Math.max(completedHours - givenHours, 0);
  }

  getHoursNeeded(subtopic: SubTopic): number {
    const completedHours = this.subtopicsTaughtHours[subtopic.sid] || 0;
    const givenHours = Number(subtopic.shours);
    return Math.max(givenHours - completedHours, 0);
  }

  // Methods to calculate total extra hours and total hours needed to complete
  getTotalExtraHours(): number {
    const difference = this.getTotalGivenHours() - this.getTotalCompletedHours();
    return Math.max(-difference, 0);
}

getTotalHoursNeeded(): number {
   
    const difference = this.getTotalGivenHours() - this.getTotalCompletedHours();
    return Math.max(difference, 0);
}
}
