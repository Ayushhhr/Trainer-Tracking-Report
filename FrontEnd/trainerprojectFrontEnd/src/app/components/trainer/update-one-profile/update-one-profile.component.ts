import { Component } from '@angular/core';
import { Profile } from '../../../models/Profile';
import { ActivatedRoute, Router } from '@angular/router';
import { TopicSubtopicServiceService } from '../../../services/topic-subtopic-service.service';
import { ProfileServiceService } from '../../../services/profile-service.service';
import { Topic } from '../../../models/Topic';
import { Observable, map, of } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-one-profile',
  templateUrl: './update-one-profile.component.html',
  styleUrl: './update-one-profile.component.css'
})
export class UpdateOneProfileComponent {
  pid: number = 0;
  profile: Profile = new Profile();
  trainerId:number=0;
  submitted = false;
  profileForm!: FormGroup;


  constructor(private route: ActivatedRoute,
     private router: Router,
     private service1: TopicSubtopicServiceService,
     private service: ProfileServiceService,
     private formBuilder: FormBuilder)
  {

  }

  public topics: Observable<Topic[]> =of([]);

  ngOnInit()
  {
    this.profileForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      mobile_no: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required]
    });
    this.profile = new Profile();

    this.pid = this.route.snapshot.params['pid'];
    
    this.trainerId = this.route.snapshot.params['trainerid'];

    this.service.getOneProfile(this.trainerId).subscribe((data) =>{
      console.log(data);
      this.profile = data;
    })
    this.getAll();
  }

  getAll()
  {
    this.topics = this.service1.getAllTopics();
  }

  addTopicProfile(id: string)
  {
    this.topics.pipe(
      map(topicList =>
        topicList[Number(id)])).subscribe(
          selectTopic => {
            this.profile.topics.push(selectTopic);
          }
        );
  }
  onSubmit()
  {
    if (this.profileForm.valid) 
    {
      this.updateProfile();
    }
    else 
    {
      this.markFormGroupTouched(this.profileForm);
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      } else {
        control.markAsTouched();
      }
    });
  }

  updateProfile()
  {
    this.service.updateProfile(this.profile).subscribe((data) =>{
     // this.player = new Player();
      this.list(this.profile.id);
    })
  }

  list(profileId: number)
  {
    this.router.navigate(['getOneProfile',this.trainerId, profileId]); // Navigating to the profile page with the dynamic profile ID
  }
}
