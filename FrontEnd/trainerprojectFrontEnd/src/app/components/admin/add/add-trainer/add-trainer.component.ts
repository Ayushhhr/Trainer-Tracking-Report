import { Component } from '@angular/core';
import { ProfileServiceService } from '../../../../services/profile-service.service';
import { Router } from '@angular/router';
import { Trainer } from '../../../../models/Trainer';
import { Observable, map } from 'rxjs';
import { Profile } from '../../../../models/Profile';
import { TrainerCourseServiceService } from '../../../../services/trainer-course-service.service';
import { EmailRequest } from '../../../../models/EmailRequest';
import { HttpClient } from '@angular/common/http';
import { EmailServiceService } from '../../../../services/email-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-trainer',
  templateUrl: './add-trainer.component.html',
  styleUrl: './add-trainer.component.css'
})
export class AddTrainerComponent {
  submitted = false;

  constructor(private service: ProfileServiceService, private service1: TrainerCourseServiceService,private router: Router,private http: HttpClient, private emailService : EmailServiceService)
  {
    this.profiles = this.service.getAllProfiles(); // Assuming getProfiles() returns an Observable<Profile[]>
  }

  emailRequest = new EmailRequest();
  trainer = new Trainer();
  public profiles: Observable<Profile[]>;

  subject : string = "";
  msgString : string= "";
  generatedPassword : string= "";

  ngOnInit()
  {
    this.getAll();
  }

  getAll()
  {
    this.profiles = this.service.getAllProfiles();
  }
/*
  addProfile(id: string)
  {
    this.profiles.pipe(
      map(profileList =>
        profileList[Number(id)])).subscribe(
          selectProfile => {
            this.trainer.profile.push(selectProfile);
          }
        );
  }
 */
  addProfile(id: string)
  {
    this.profiles.pipe(
        map(profileList => profileList[Number(id)])
    ).subscribe(
        selectProfile => {
            this.trainer.profile = selectProfile; // Set the selected profile to trainer.profile
        }
    );
  }
  onSubmit()
  {
    this.generatePassword(); // Generate password before saving
    this.save();
    this.sendMail(this.trainer.username,this.generatedPassword); // Send email after submitting the form
    this.submitted = true;
  }

  generatePassword() 
  {
    // Generating a random password
    this.generatedPassword = Math.random().toString(36).slice(-8); // Generates an 8-character random password
    this.trainer.password = this.generatedPassword;
  }

  sendMail(recipientEmail: string, password: string) {
    // Constructing the email subject
    const emailSubject = "Login Credentials for Trainer";
  
    // Constructing the email message
    const emailMessage = `Hello ${recipientEmail},\n\n
                    Your login credentials for the website are:\n
                    Username: ${recipientEmail}\n
                    Password: ${password}\n\n
                    You can now login to the website using these credentials.\n\n
                    Regards,\nSymbiosis Centre of Distance Learning`;
  
    // Sending the email
    this.emailService.sendEmail(recipientEmail, emailSubject, emailMessage).subscribe(response => {
      console.log("Response: ", response);
      // Handle the response as needed
    });
}


  save() {
    Swal.fire({
      title: 'Successfully Submitted',
      icon: 'success'
    });
    this.service1.addTrainer(this.trainer).subscribe(() => {
      this.gotoList();
    });
  }

  gotoList() {
    this.router.navigate(['/listTrainer']);
  }
}
