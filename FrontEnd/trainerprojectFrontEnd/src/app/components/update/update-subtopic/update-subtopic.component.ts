import { Component } from '@angular/core';
import { SubTopic } from '../../../models/SubTopic';
import { ActivatedRoute, Router } from '@angular/router';
import { TopicSubtopicServiceService } from '../../../services/topic-subtopic-service.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-subtopic',
  templateUrl: './update-subtopic.component.html',
  styleUrl: './update-subtopic.component.css'
})
export class UpdateSubtopicComponent {
  id: number = 0;
  subtopic: SubTopic = new SubTopic();
  submitted = false;
  subtopicForm !: FormGroup;

  constructor(private route: ActivatedRoute, 
    private router: Router,
    private subtopicService: TopicSubtopicServiceService,
    private formBuilder : FormBuilder)
  {

  }

  ngOnInit()
  {
    this.subtopicForm=this.formBuilder.group
    ({
      subtopic_name :['',Validators.required],
      subtopic_hours : ['',Validators.required]
    });
    this.subtopic = new SubTopic();

    this.id = this.route.snapshot.params['id'];

    this.subtopicService.getOneSubtopic(this.id).subscribe((data) =>{
      console.log(data);
      this.subtopic = data;
    })
  }

  onSubmit()
  {
    this.submitted = true;
    if (this.subtopicForm.valid) 
    {
    this.updateTopic();
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

  updateTopic()
  {Swal.fire({
    title: 'Do you want to save the changes?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Save',
    denyButtonText: `Don't save`
  }).then((result) => {
    if (result.isConfirmed) {
      this.subtopicService.updateSubtopic(this.subtopic).subscribe((data) =>{
    
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
    this.router.navigate(['listSubtopic']);
  }
}
