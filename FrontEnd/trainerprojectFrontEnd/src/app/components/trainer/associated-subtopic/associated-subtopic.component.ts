import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TopicSubtopicServiceService } from '../../../services/topic-subtopic-service.service';
import { ProfileServiceService } from '../../../services/profile-service.service';
import { HttpClient } from '@angular/common/http';
import { Batch } from '../../../models/Batch';
import { Observable, of } from 'rxjs';
import { Profile } from '../../../models/Profile';
import { Topic } from '../../../models/Topic';
import { SubTopic } from '../../../models/SubTopic';
import { TaughtHoursService } from '../../../services/taught-hours.service';

@Component({
  selector: 'app-associated-subtopic',
  templateUrl: './associated-subtopic.component.html',
  styleUrl: './associated-subtopic.component.css'
})
export class AssociatedSubtopicComponent {
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
    this.batchId = this.route.snapshot.params['bid'];
    this.trainerId = this.route.snapshot.params['trainerid'];
    this.getAll();

    this.topic = new Topic();
    this.topicId = this.route.snapshot.params['topicid'];
    console.log("TopicID: ", this.topicId);
    this.service.getOneTopic(this.topicId).subscribe((data) => {
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

  updateTaughtHrs(sid: number) {
    console.log("Inside Update Thrs for Subtopic ID:", sid);
    this.router.navigate(['updateThrs', sid]);
  }

  submitTaughtHours(subtopic: SubTopic) {
    const tsaData = {
      batch: {
        bid: this.batchId
      },
      subTopic: {
        sid: subtopic.sid
      },
      takenHours: this.subtopicsTaughtHours[subtopic.sid]
    };

    // Send HTTP request to submit taught hours
    this.http.post('http://localhost:8088/tsa/add', tsaData)
      .subscribe((response) => {
        console.log('Taught hours submitted:', response);
        // Optionally, you can handle success or display a message to the user
      }, (error) => {
        console.error('Error submitting taught hours:', error);
        // Optionally, you can handle errors or display an error message to the user
      });
  }
}
