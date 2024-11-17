import { Component } from '@angular/core';
import { CourseTopicServiceService } from '../../../../services/course-topic-service.service';
import { Router } from '@angular/router';
import { Course } from '../../../../models/Course';
import { Observable, map, of } from 'rxjs';
import { Topic } from '../../../../models/Topic';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css'
})
export class AddCourseComponent {
  submitted = false;
  courseForm !: FormGroup;
  
  constructor(private courseService: CourseTopicServiceService, private router: Router, private formBuilder : FormBuilder)
  {

  }

  course = new Course();
  public topics: Observable<Topic[]> =of([]);

  ngOnInit()
  {
    this.courseForm=this.formBuilder.group({
      course_name :['',Validators.required],
      topicSelect : ['',Validators.required]


    });
    this.getAll();
  }

  getAll()
  {
    this.topics = this.courseService.getAllTopics();
  }

  addTopic(id: string)
  {
    this.topics.pipe(
      map(topicList =>
        topicList[Number(id)])).subscribe(
          selectTopic => {
            this.course.topic.push(selectTopic);
          }
        );
  }
  onSubmit()
  {
    this.submitted = true;
    if (this.courseForm.valid) 
    {
      this.save();
    } 
    else 
    {
      this.markFormGroupTouched(this.courseForm);
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
    this.courseService.addCourse(this.course).subscribe();
    this.goto();
  }
  goto()
  {
    this.router.navigate(['/listCourse']);
  }

}
