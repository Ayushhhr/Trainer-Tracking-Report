import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Batch } from '../../../models/Batch';
import { BatchTrainerServiceService } from '../../../services/batch-trainer-service.service';
import { Profile } from '../../../models/Profile';
import { ProfileServiceService } from '../../../services/profile-service.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-batch',
  templateUrl: './update-batch.component.html',
  styleUrls: ['./update-batch.component.css']
})
export class UpdateBatchComponent {
  bid: number = 0;
  batch: Batch = new Batch();
  batchForm !: FormGroup;
  submitted = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private service1: BatchTrainerServiceService,
              private service: ProfileServiceService,
              private formBuilder: FormBuilder) {}

  public profiles: Observable<Profile[]> = of([]);

  ngOnInit() {
    this.batchForm = this.formBuilder.group({
      batch_name: ['', Validators.required],
      start_date: ['', Validators.required], // Define form control for start date
      end_date: ['', Validators.required] // Define form control for end date
    });

    this.bid = this.route.snapshot.params['id'];

    this.service1.getOneBatch(this.bid).subscribe((data) => {
      console.log(data);
      this.batch = data;
    });

    this.getAll();
  }

  getAll() {
    this.profiles = this.service.getAllProfiles();
  }

  addTrainer(id: string) {
    this.profiles.pipe(
      map(profileList =>
        profileList[Number(id)])).subscribe(
        selectTrainer => {
          this.batch.profiles.push(selectTrainer);
        }
      );
  }

  onSubmit() {
    console.log("Inside onSubmit")
    this.submitted = true;
    if (this.batchForm.valid) {
      this.updateBatch();
    } else {
      this.markFormGroupTouched(this.batchForm);
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

  updateBatch() {
    console.log("Inside Update Batch")
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`
    }).then((result) => {
      if (result.isConfirmed) {
        this.service1.updateBatch(this.batch).subscribe(
          () => {
            Swal.fire({
              title: 'Saved!',
              icon: 'success'
            });
            this.list();
          },
          (error) => {
            let errorMessage = 'An error occurred.'; // Default error message
            if (error && error.error && error.error.message) {
              errorMessage = error.error.message; // Extract the error message from the error response
            }
            Swal.fire({
              title: errorMessage,
              icon: 'error'
            });
          }
        );
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  }
  

  list() {
    this.router.navigate(['listBatch']);
  }

  removeProfile(index: number, bid:number, pid: number) {
    this.service1.deleteProfileFromBatch(bid, pid)
      .subscribe(
        () => {
          console.log('Profile deleted successfully');
          // Remove the profile from the batch array
          this.batch.profiles.splice(index, 1);
        },
        error => {
          console.error('Error deleting profile:', error);
          // Handle error if necessary
        }
      );
  }
  
}
