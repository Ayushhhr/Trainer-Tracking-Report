import { Component } from '@angular/core';
import { SubTopic } from '../../../../models/SubTopic';
import { TopicSubtopicServiceService } from '../../../../services/topic-subtopic-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-subtopic',
  templateUrl: './add-subtopic.component.html',
  styleUrl: './add-subtopic.component.css'
})
export class AddSubtopicComponent {

  submitted = false;
  subtopicForm !: FormGroup;

  constructor(private topicService: TopicSubtopicServiceService, 
    private router: Router,
    private formBuilder : FormBuilder)
  {

  }

  subtopic = new SubTopic();

  ngOnInit()
  {
    
      this.subtopicForm=this.formBuilder.group({
        subtopic_name :['',Validators.required],
        subtopic_hours : ['',Validators.required]
  
  
      });
  }

  onSubmit()
  {
    this.submitted = true;
    if (this.subtopicForm.valid) 
    {
      this.save();
    } 
    else 
    {
      this.markFormGroupTouched(this.subtopicForm);
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

  save()
  {
    Swal.fire({
      title: 'Successfully Submitted',
      icon: 'success'
    });
    this.topicService.addSubtopic(this.subtopic).subscribe();
    this.goto();
  }
  goto()
  {
    this.router.navigate(['/listSubtopic']);
  }
}
