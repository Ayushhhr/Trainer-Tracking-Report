import { Component } from '@angular/core';
import { Course } from '../../../models/Course';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseTopicServiceService } from '../../../services/course-topic-service.service';
import { Topic } from '../../../models/Topic';
import { Observable, map, of } from 'rxjs';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrl: './update-course.component.css'
})
export class UpdateCourseComponent {
  id: number = 0;
  course: Course = new Course();
  submitted = false;
  courseForm !: FormGroup;

  constructor(private route: ActivatedRoute, 
    private router: Router,
    private courseService: CourseTopicServiceService,
    private formBuilder : FormBuilder)
  {

  }

  public topics: Observable<Topic[]> =of([]);

  ngOnInit()
  {
    this.courseForm=this.formBuilder.group({
      course_name :['',Validators.required]


    });
    this.course = new Course();

    this.id = this.route.snapshot.params['id'];

    this.courseService.getOneCourse(this.id).subscribe((data) =>{
      console.log(data);
      this.course = data;
    })
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
    this.updateCourse();
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

  updateCourse()
  {
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`
    }).then((result) => {
      if (result.isConfirmed) {
        this.courseService.updateCourse(this.course).subscribe((data) =>{          Swal.fire('Saved!', '', 'success');
          this.list();
        });
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  }

  list()
  {
    this.router.navigate(['listCourse']);
  }
  removeTopic(index: number) {
    this.course.topic.splice(index, 1);
  }
}   
