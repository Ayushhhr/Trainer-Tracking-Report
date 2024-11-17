import { Component } from '@angular/core';
import { Admin } from '../../models/Admin';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminAuthService } from '../../services/admin-auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {

  public admin :Admin = new Admin();

  id: number = 0;
  userName: string = '';
  password: string = '';
  loginError: boolean = false;
  loginForm !: FormGroup;
  type: string="password";

  submitted = false;

  constructor(private authService: AdminAuthService, private router: Router, private fb: FormBuilder) 
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

  toggleVisibility() 
  {
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

      this.loginAdmin(username, password);
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
  loginAdmin(username:string, password:string) 
  {
    this.admin = new Admin();

    this.authService.authenticateAdmin(username, password).subscribe(
      (data: any) => { // Handle the received data, which might not be a Trainer object
        // Check if the data is a Trainer object
        if (data && data.id && data.username && data.password) 
        {
          console.log(data);
          this.admin = data; // Assign the received data to the trainer object
          console.log("Id:", this.admin.id);
          this.router.navigate(['/admin-dashboard']);
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
