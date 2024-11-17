import { Component, ElementRef, ViewChild } from '@angular/core';
import { Topic } from '../../../models/Topic';
import { ActivatedRoute, Router } from '@angular/router';
import { TopicSubtopicServiceService } from '../../../services/topic-subtopic-service.service';
import { SubTopic } from '../../../models/SubTopic';
import { Observable, map, of } from 'rxjs';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-topic',
  templateUrl: './update-topic.component.html',
  styleUrl: './update-topic.component.css'
})
export class UpdateTopicComponent {
  id: number = 0;
  topic: Topic = new Topic();
  public subtopics: Observable<SubTopic[]> = of([]);
  totalHours: number = 0;
  submitted = false;
  topicForm !: FormGroup;

  constructor(private route: ActivatedRoute,
     private router: Router,
     private topicService: TopicSubtopicServiceService,
     private formBuilder : FormBuilder) {}

  ngOnInit() {
    this.topicForm=this.formBuilder.group({
      topic_name :['',Validators.required]
    });
    this.id = this.route.snapshot.params['id'];
    this.getTopic();
    this.getAllSubtopics();
  }

  getTopic() {
    this.topicService.getOneTopic(this.id).subscribe((data) => {
      this.topic = data;
      this.calculateTotalHours();
    });
  }

  getAllSubtopics() {
    this.subtopics = this.topicService.getAllSubtopics();
  }

  addSubtopic(id: string) {
    this.subtopics.pipe(
      map(subtopicList => subtopicList[Number(id)])
    ).subscribe(
      selectSubtopic => {
        this.topic.subtopic.push(selectSubtopic);
        this.calculateTotalHours();
      }
    );
  }
  calculateTotalHours() {
    // Calculate total hours dynamically
    this.totalHours = this.topic.subtopic.reduce((acc, subtopic) => acc + Number(subtopic.shours), 0);
  }

  onSubmit()
  {
    this.submitted = true;
    if (this.topicForm.valid) 
    {
    this.updateTopic();
    }
    else 
    {
      this.markFormGroupTouched(this.topicForm);
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
      this.topicService.updateTopic(this.topic).subscribe((data) =>{
     
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
    this.router.navigate(['listTopic']);
  }
  removeTopic(index: number) {
    this.topic.subtopic.splice(index, 1);
  }
}
