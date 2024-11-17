import { Component } from '@angular/core';
import { Profile } from '../../../models/Profile';
import { ActivatedRoute, Router } from '@angular/router';
import { TopicSubtopicServiceService } from '../../../services/topic-subtopic-service.service';
import { ProfileServiceService } from '../../../services/profile-service.service';
import { Topic } from '../../../models/Topic';
import { Observable, map, of } from 'rxjs';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrl: './update-profile.component.css'
})
export class UpdateProfileComponent {
  id: number = 0;
  profile: Profile = new Profile();
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

    this.id = this.route.snapshot.params['id'];

    this.service.getOneProfile(this.id).subscribe((data) =>{
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
    if (this.profileForm.valid) {
    this.updateProfile();
    }
    else {
      // Mark all form fields as touched to display validation messages
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
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.updateProfile(this.profile).subscribe((data) =>{
          Swal.fire('Saved!', '', 'success');
          this.list();
        });
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  }

  list()
  {
    this.router.navigate(['listProfile']);
  }
  removeSkill(index: number) {
    this.profile.topics.splice(index, 1);
  }
}
