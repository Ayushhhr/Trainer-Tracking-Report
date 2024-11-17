import { Component } from '@angular/core';
import { BatchTrainerServiceService } from '../../../../services/batch-trainer-service.service';
import { Router } from '@angular/router';
import { Batch } from '../../../../models/Batch';
import { Profile } from '../../../../models/Profile';
import { Observable, map, of } from 'rxjs';
import { ProfileServiceService } from '../../../../services/profile-service.service';
import Swal from 'sweetalert2';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-add-batch',
  templateUrl: './add-batch.component.html',
  styleUrl: './add-batch.component.css'
})
export class AddBatchComponent {
  submitted = false;
  selectTrainer: any;
  batchForm !: FormGroup;
  batch = new Batch();
  public profiles: Observable<Profile[]> =of([]);

  constructor(private service: ProfileServiceService,private service1: BatchTrainerServiceService, private router: Router,
    private formBuilder : FormBuilder)
  {

  }

  ngOnInit()
  {
    
      this.batchForm=this.formBuilder.group({
        batch_name :['',Validators.required],
        batch_date : ['',Validators.required],
        trainerSelect : ['',Validators.required]
  
  
      });
    this.getAll();
  }

  getAll()
  {
    this.profiles = this.service.getAllProfiles();
  }

  addTrainer(id: string)
  {
    this.profiles.pipe(
      map(profileList =>
        profileList[Number(id)])).subscribe(
          selectTrainer => {
            this.batch.profiles.push(selectTrainer);
          });
  }
  onSubmit() {
    const batchName = this.batchForm.get('batch_name')?.value; // Retrieve batch_name value
    console.log('Batch Name:', batchName); // Log the batch name before submission
    console.log('Form Value:', this.batchForm.value);
    this.submitted = true;
    if (this.batchForm.valid) {
      this.batch.bname = batchName; // Assign batch_name value to batch object
      this.save();
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
  save() {
    this.service1.addBatch(this.batch).subscribe(
      () => {
        Swal.fire({
          title: 'Successfully Submitted',
          icon: 'success'
        });
        this.goto();
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
  }
  
  goto()
  {
    this.router.navigate(['/listBatch']);
  }

}
