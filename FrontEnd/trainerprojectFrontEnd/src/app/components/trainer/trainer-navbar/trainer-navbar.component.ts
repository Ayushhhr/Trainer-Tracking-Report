import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainerCourseServiceService } from '../../../services/trainer-course-service.service';
import { Trainer } from '../../../models/Trainer';
import { Profile } from '../../../models/Profile';
import { ProfileServiceService } from '../../../services/profile-service.service';
import { TrainerNavbarService } from '../../../services/trainer-navbar.service';


@Component({
  selector: 'app-trainer-navbar',
  templateUrl: './trainer-navbar.component.html',
  styleUrls: ['./trainer-navbar.component.css']
})
export class TrainerNavbarComponent  {
  constructor(private route: ActivatedRoute, private router: Router,private service: TrainerCourseServiceService,private profileService: ProfileServiceService)
  {
    
  }

  trainerId : number = 0;
  trainer : Trainer = new Trainer();
  visit : boolean = true;

  profile: Profile = new Profile();
  

  ngOnInit()
  {
    console.log("Inside Navbar");
    this.trainerId = +this.route.snapshot.params['trainerid'];
    console.log("Trainer id: ",this.trainerId);    

    this.service.getOneTrainer(this.trainerId).subscribe((data) => {
      console.log("Trainer: ",data);
      this.trainer = data;
      // Assuming trainer always has a profile, initializing profile here
      this.profile = this.trainer?.profile ?? new Profile();
    });
  }
  getProfile() {

    console.log("Inside getProfile method");
    // Fetch profile data here
    const profileId = this.trainer.profile?.id; // Use optional chaining to handle undefined profile
    if (profileId !== undefined) {
      this.profileService.getOneProfile(profileId).subscribe(
        (data) => {
          console.log(data);
          this.profile = data;
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    } else {
      console.error('Profile ID is undefined');
    }
  }
  profileDetails(id : number)
  {
    this.router.navigate(['detailsProfile',id]);
  }
  deleteProfile(id:number)
  {
    return this.profileService.deleteProfile(id).subscribe( (data)=>{
      console.log(data);
      this.getAll();
    })
  }
  updateProfile(id : number)
  {
    this.router.navigate(['updateProfile',id]);
  }
  getAll()
  {
    this.profile = this.profileService.getAllProfiles();
  }
}
