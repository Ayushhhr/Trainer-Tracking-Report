import { Component, OnInit } from '@angular/core';
import { Profile } from '../../../models/Profile';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileServiceService } from '../../../services/profile-service.service';

@Component({
  selector: 'app-one-profile',
  templateUrl: './one-profile.component.html',
  styleUrl: './one-profile.component.css'
})
export class OneProfileComponent  {

  profile: Profile = new Profile();

  tid: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProfileServiceService
  ) {}

  ngOnInit() 
  {
    console.log("Inside One Profile");
    // Retrieve the profile id from the route parameter
    const profileId = +this.route.snapshot.params['pid'];
   this.tid = +this.route.snapshot.params['trainerid'];

    console.log("Trainer Id: ",this.tid);

    console.log("ProfileId: ",profileId);

    // Fetch profile data based on profile id
    this.service.getOneProfile(profileId).subscribe(
      (data) => {
        console.log("profile:",data);
        this.profile = data;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
 }
  profileDetails(tid: number, id : number)
  {
    this.router.navigate(['trainerDetailsProfile',tid,id]);
  }
  updateProfile(tid: number,id : number)
  {
    this.router.navigate(['updateOneProfile',tid,id]);
  }
}
