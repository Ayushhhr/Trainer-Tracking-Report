import { Component } from '@angular/core';
import { ProfileServiceService } from '../../../../services/profile-service.service';
import { TopicSubtopicServiceService } from '../../../../services/topic-subtopic-service.service';
import { Router } from '@angular/router';
import { Profile } from '../../../../models/Profile';
import { Observable, map, of } from 'rxjs';
import { Topic } from '../../../../models/Topic';
import { EmailRequest } from '../../../../models/EmailRequest';
import { Trainer } from '../../../../models/Trainer';
import { TrainerCourseServiceService } from '../../../../services/trainer-course-service.service';
import { EmailServiceService } from '../../../../services/email-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrl: './add-profile.component.css'
})
export class AddProfileComponent {
  submitted = false;
  profileForm!: FormGroup;
  constructor(
    private service: ProfileServiceService, 
    private trainerService : TrainerCourseServiceService, 
    private service1: TopicSubtopicServiceService,
    private router: Router,
    private emailService : EmailServiceService,
    private formBuilder: FormBuilder)
  {}

  profile = new Profile();
  public topics: Observable<Topic[]> =of([]);

  emailRequest = new EmailRequest();
  trainer: Trainer = new Trainer();
  subject : string = "";
  msgString : string= "";
  generatedPassword : string= "";
  generatedUsername : string= "";

  ngOnInit()
  {
    this.profileForm = this.formBuilder.group({
      first_name: ['', Validators.required], // Add Validators.required for each field
      last_name: ['', Validators.required],
      mobile_no: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]], // Add email validation
      address: ['', Validators.required],
      skillSelect: ['', Validators.required]
    });
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
      this.generateUsername();
      this.generatePassword();
      this.save();
      this.sendMail(this.profile.email,this.generatedUsername,this.generatedPassword);
      this.submitted = true;
    } else {
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
  save() {
    Swal.fire({
      title: 'Successfully Submitted',
      text: "The login credentials has been sent to the trainer's email",
      icon: 'success'
    });
    // First, save the profile
    this.service.addProfile(this.profile).subscribe((savedProfile) => {
      // Type assertion
      const profile = savedProfile as Profile;
      
      // Assign the saved profile ID to the trainer
      this.trainer.profile = profile;
      
      // Then, save the trainer
      this.trainerService.addTrainer(this.trainer).subscribe(() => {
        // Navigate to the desired route
        this.goto();
      });
    });
  }
  
  goto()
  {
    this.router.navigate(['/listProfile']);
  }

  generateUsername() {
    // Create username based on first name and last name
    const concatedName = `${this.profile.firstName.toLowerCase()}${this.profile.lastName.toLowerCase()}`;
    
    // Generate three random numbers between 0 and 999
    const randomNumber = Math.floor(Math.random() * 1000);
    
    // Concatenate the random numbers to the username
    this.generatedUsername = `${concatedName}${randomNumber.toString().padStart(3, '0')}`;
    
    console.log('Generated Username:', this.generatedUsername);
    this.trainer.username = this.generatedUsername;
}

  generatePassword() {
    // Generate a random password
    const passwordLength = 8;
    const passwordCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * passwordCharacters.length);
      this.generatedPassword += passwordCharacters.charAt(randomIndex);
    }
    console.log('Generated Password:', this.generatedPassword);
    this.trainer.password = this.generatedPassword;
  }

  sendMail(email: string, username: string, password: string) {
    // Constructing the email subject
    const emailSubject = "Login Credentials for Trainer";
  
    // Constructing the email message
    const emailMessage = `Hello ${this.profile.firstName},\n\n`
                    + `Your login credentials for the website are:\n`
                    + `Username: ${username}\n`
                    + `Password: ${password}\n\n`
                    + `You can now login to the website using these credentials.\n\n`
                    + `Regards,\nSymbiosis Centre of Distance Learning`;
  
    // Sending the email
    this.emailService.sendEmail(email, emailSubject, emailMessage).subscribe(response => {
      console.log("Response: ", response);
      // Handle the response as needed
    });
  }
}
