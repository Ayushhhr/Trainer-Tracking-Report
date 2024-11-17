import { Component, HostBinding, HostListener } from '@angular/core';
import { Trainer } from '../../models/Trainer';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TrainerAuthServiceService } from '../../services/trainer-auth-service.service';

@Component({
  selector: 'app-staff-login',
  templateUrl: './staff-login.component.html',
  styleUrl: './staff-login.component.css'
})
export class StaffLoginComponent {

  public trainer :Trainer = new Trainer();

  id: number = 0;
  userName: string = '';
  password: string = '';
  loginError: boolean = false;
  hide = true;

  loginForm !: FormGroup;
  type: string="password";
  submitted = false;

  constructor(private authService: TrainerAuthServiceService, private router: Router, private fb: FormBuilder) 
  {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  
  ngOnInit()
  {
    
      this.loginForm=this.fb.group({
        username :['',Validators.required],
        password :['',Validators.required]
  
  
      });
  }

  
  toggleVisibility() {
    this.type = this.type === 'password' ? 'text' : 'password';
}

  onSubmit()
  {
    this.submitted = true;
    if (this.loginForm.valid) 
    {
      const formData = this.loginForm.value;
      const username = formData.username;
      const password = formData.password;

      console.log('Form data:', formData);
      console.log("Username:", username);
  
      this.loginTrainer(username, password);
    }
    else 
    {
      this.markFormGroupTouched(this.loginForm);
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


  // Method to handle login
  loginTrainer(username:string, password:string) 
  {
    this.trainer = new Trainer();

    this.authService.authenticateTrainer(username, password).subscribe(
      (data: any) => { // Handle the received data, which might not be a Trainer object
        // Check if the data is a Trainer object
        if (data && data.id && data.username && data.password && data.course && data.profile) 
        {
          console.log(data);
          this.trainer = data; // Assign the received data to the trainer object
          console.log("Id:", this.trainer.id);
          this.router.navigate(['trainer-dashboard', this.trainer.id]);
        } else {
          console.error("Error: Invalid data received from the server");
        }
      },
      (error) => { // Handle any errors
        console.error("Error:", error);
      }
    );
  }
}
