import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseTopicServiceService } from '../../services/course-topic-service.service';
import { Course } from '../../models/Course';

@Component({
  selector: 'app-course-topic-details',
  templateUrl: './course-topic-details.component.html',
  styleUrl: './course-topic-details.component.css'
})
export class CourseTopicDetailsComponent {
  constructor(private route: ActivatedRoute, private router: Router,private service: CourseTopicServiceService)
  {
    
  }

  cid : number = 0;
  course : Course = new Course();
  visit : boolean = true;
  ngOnInit()
  {
    this.course = new Course();

    this.cid = this.route.snapshot.params['cid'];

    this.service.getOneCourse(this.cid).subscribe((data) =>{
      console.log(data);
      this.course = data;
    })
  }
  list()
  {
    this.router.navigate(['listCourse']);
  }

  courseDetails(id : string)
  {
    return this.service.getOneCourse(Number(id)).subscribe((data) =>{
      this.course = data;
      console.log(data);
      console.log(this.course);

      this.visit = true;
    })
  }
  topicDetails(id : number)
  {
    this.router.navigate(['detailsTopicSubtopic',id]);
  }


}
