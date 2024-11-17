import { Component } from '@angular/core';
import { Trainer } from '../../../models/Trainer';
import { Observable, of } from 'rxjs';
import { BatchTrainerServiceService } from '../../../services/batch-trainer-service.service';
import { ProfileServiceService } from '../../../services/profile-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrl: './trainer-list.component.css'
})
export class TrainerListComponent {

  public trainers : Observable<Trainer[]> = of([]);
  searchtext:any;

  constructor(private service: BatchTrainerServiceService,private profileService: ProfileServiceService, private router: Router)
  {
    
  }

  ngOnInit()
  {
    this.getAll();
  }

  getAll()
  {
    this.trainers = this.service.getAllTrainers();
  }
  deleteTrainer(id:number)
  {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this trainer ??',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        // Call your service to delete the batch here
        this.service.deleteTrainer(id).subscribe( (data)=>{
          console.log(data);
          this.getAll(); // Refresh the batch list after deletion
        });
        Swal.fire({
          title: 'Deleted!',
          text: 'Your trainer has been deleted.',
          icon: 'success'
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: 'Cancelled',
          text: 'Your trainer is safe :)',
          icon: 'error'
        });
      }
    });
  }
  updateTrainer(id : number)
  {
    this.router.navigate(['updateTrainer',id]);
  }
}
