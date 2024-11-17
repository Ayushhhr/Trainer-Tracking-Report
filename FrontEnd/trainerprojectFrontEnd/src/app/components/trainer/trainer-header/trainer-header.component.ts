import { Component, OnInit } from '@angular/core';
import { Profile } from '../../../models/Profile';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileServiceService } from '../../../services/profile-service.service';
import { Trainer } from '../../../models/Trainer';

@Component({
  selector: 'app-trainer-header',
  templateUrl: './trainer-header.component.html',
  styleUrl: './trainer-header.component.css'
})
export class TrainerHeaderComponent  {
  
  profile: Profile = new Profile();
  trainer: Trainer = new Trainer();
  profileId : number =0;

  tid: number = 0;

  constructor(
    private route: ActivatedRoute,
    private service: ProfileServiceService
  ) {}

  ngOnInit() 
  {
    // Retrieve the profile id from the route parameter
    this.profileId = +this.route.snapshot.params['pid'];


    console.log("Inside Trainer Header ProfileId: ",this.profileId);

    // Fetch profile data based on profile id
    this.service.getOneProfile(this.profileId).subscribe(
      (data) => {
        console.log("profile:",data);
        this.profile = data;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
 }
}
