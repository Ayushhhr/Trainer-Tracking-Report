import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trainer-dashboard',
  templateUrl: './trainer-dashboard.component.html',
  styleUrls: ['./trainer-dashboard.component.css']
})
export class TrainerDashboardComponent {
  trainerId: number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit()
  {
    console.log("Inside Trainer Dashboard");
    this.trainerId = +this.route.snapshot.params['trainerid'];
    console.log("Trainer id: ",this.trainerId);    
  }
}
