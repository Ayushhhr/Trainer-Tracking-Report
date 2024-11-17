import { Component, Input } from '@angular/core';
import { Batch } from '../../../models/Batch';
import { Observable, of } from 'rxjs';
import { Profile } from '../../../models/Profile';
import { ProfileServiceService } from '../../../services/profile-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-associated-batches',
  templateUrl: './associated-batches.component.html',
  styleUrl: './associated-batches.component.css'
})
export class AssociatedBatchesComponent {
  public batches : Observable<Batch[]> = of([]);
  searchtext: any;

  profile : Profile = new Profile();
  profileId : number = 0;
  batchId : number = 0;
  trainerId : number = 0;

  constructor(private service: ProfileServiceService,  private route: ActivatedRoute, private router: Router,)
  {

  }

  ngOnInit()
  {
    console.log("Inside Associated Batches");
     // Retrieve the profile id from the route parameter
     this.profileId = this.route.snapshot.params['pid'];
     this.trainerId = this.route.snapshot.params['trainerid'];

     console.log("Trainer Id:",this.trainerId);
     this.getAll();
  }
  
  getAll() 
  {
     // Retrieve the profile id from the route parameter
     const profileId = this.route.snapshot.params['pid'];

    console.log("ProfileId: ",profileId);
    this.batches = this.service.getAssociatedBatches(profileId); // Assign the observable

    // Subscribe to the Observable to log batches in the console
    this.batches.subscribe(batches => {
      console.log("Batches:", batches);
    });
  }
  profileDetails(trainerId: number,pid: number,bid: number)
  {
    console.log("profileId: ", pid);
    console.log("batchId: ", bid);
    this.router.navigate(['getOneProfileDetails',trainerId,pid,bid]);
  }
  isBatchCompleted(endDate: string): boolean {
    // Get current date
    const currentDate = new Date();
    // Convert end date string to Date object
    const batchEndDate = new Date(endDate);
    // Compare end date with current date
    return batchEndDate < currentDate;
  }
}
