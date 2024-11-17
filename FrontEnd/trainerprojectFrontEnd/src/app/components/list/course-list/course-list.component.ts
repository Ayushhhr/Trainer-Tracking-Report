import { Component } from '@angular/core';
import { Course } from '../../../models/Course';
import { Observable, of } from 'rxjs';
import { CourseTopicServiceService } from '../../../services/course-topic-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {
  public courses : Observable<Course[]> = of([]);
  searchtext:any;

  constructor(private service: CourseTopicServiceService, private router : Router)
  {

  }

  ngOnInit()
  {
    this.getAll();
  }
  getAll()
  {
    this.courses = this.service.getAllCourses();
  }
  courseDetails(id : number)
  {
    this.router.navigate(['detailsCourseTopic',id]);
  }
  deleteCourse(id:number)
  {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this course ??',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        // Call your service to delete the batch here
        this.service.deleteCourse(id).subscribe( (data)=>{
          console.log(data);
          this.getAll(); // Refresh the batch list after deletion
        });
        Swal.fire({
          title: 'Deleted!',
          text: 'Your course has been deleted.',
          icon: 'success'
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: 'Cancelled',
          text: 'Your course is safe :)',
          icon: 'error'
        });
      }
    });
    
  }
  updateCourse(id : number)
  {
    this.router.navigate(['updateCourse',id]);
  }
}
