import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, map, of, switchMap } from 'rxjs';
import { Profile } from '../../../models/Profile';
import { ProfileServiceService } from '../../../services/profile-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { BatchTrainerServiceService } from '../../../services/batch-trainer-service.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrl: './profile-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class ProfileListComponent {
  public prfiles : Observable<Profile[]> = of([]);
  profiles: any;
  private trainerCache = new Map<number, Observable<string>>(); // Cache for storing trainer observables
  trainerId: number = 0;
  searchtext: any;

  constructor(private service: ProfileServiceService, private router : Router,private trainerService: BatchTrainerServiceService)
  {

  }

  ngOnInit()
  {
    this.getAll();
  }
  getAll()
  {
    this.profiles = this.service.getAllProfiles();
  }
 /* 
  getUsername(profileId: number): Observable<string> {
    console.log("profile id: ",profileId);
    return this.service.getUsernameById(profileId).pipe(
      map((response: any) => response.username) // Extract username from response
    );
  }
 */

  profileDetails(id : number)
  {
    this.router.navigate(['detailsProfile',id]);
  }
  deleteProfile(id:number)
  {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this profile ??',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        // Call your service to delete the batch here
        this.service.deleteProfile(id).subscribe( (data)=>{
          console.log(data);
          this.getAll(); // Refresh the batch list after deletion
        });
        Swal.fire({
          title: 'Deleted!',
          text: 'Your profile has been deleted.',
          icon: 'success'
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: 'Cancelled',
          text: 'Your profile is safe :)',
          icon: 'error'
        });
      }
    });
  }
  updateProfile(id : number)
  {
    this.router.navigate(['updateProfile',id]);
  }
}
