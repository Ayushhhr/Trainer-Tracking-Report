import { Component } from '@angular/core';
import { TopicSubtopicServiceService } from '../../../../services/topic-subtopic-service.service';
import { Router } from '@angular/router';
import { Topic } from '../../../../models/Topic';
import { SubTopic } from '../../../../models/SubTopic';
import { Observable, map, of } from 'rxjs';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-topic',
  templateUrl: './add-topic.component.html',
  styleUrl: './add-topic.component.css'
})
export class AddTopicComponent {
  submitted = false;
  topicForm !: FormGroup;

  constructor(private topicService: TopicSubtopicServiceService, 
    private router: Router,
    private formBuilder : FormBuilder)
  {

  }

  topic = new Topic();
  public subtopics: Observable<SubTopic[]> =of([]);
  totalHours = 0;

  ngOnInit()
  {
    this.topicForm=this.formBuilder.group({
      topic_name :['',Validators.required],
      subtopicSelect : ['',Validators.required]
    });
    this.getAll();
  }

  getAll()
  {
    this.subtopics = this.topicService.getAllSubtopics();
  }

  addSubtopic(id: string) {
    this.subtopics.pipe(
      map(subtopicList => subtopicList[Number(id)])
    ).subscribe(
      selectSubtopic => {
        this.topic.subtopic.push(selectSubtopic);
        // Recalculate total hours
        this.calculateTotalHours();
      }
    );
  }
  calculateTotalHours() {
    this.totalHours = this.topic.subtopic.reduce((acc, subtopic) => acc + Number(subtopic.shours), 0);
  }
  onSubmit()
  {
    this.submitted = true;
    if (this.topicForm.valid) 
    {
      this.save();
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

  save()
  {
    // Save the topic
    this.topicService.addTopic(this.topic).subscribe(() => {
      this.goto();
    });
  }
  
  goto()
  {
    this.router.navigate(['/listTopic']);
  }

}
