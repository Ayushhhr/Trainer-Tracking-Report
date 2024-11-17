import { Component } from '@angular/core';
import { Topic } from '../../../models/Topic';
import { Observable, of } from 'rxjs';
import { TopicSubtopicServiceService } from '../../../services/topic-subtopic-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrl: './topic-list.component.css'
})
export class TopicListComponent {
  public topics : Observable<Topic[]> = of([]);
  searchtext:any;

  constructor(private topicService: TopicSubtopicServiceService, private router: Router)
  {
    
  }

  ngOnInit()
  {
    this.getAll();
  }

  getAll()
  {
    this.topics = this.topicService.getAllTopics();
  }

  topicDetails(id : number)
  {
    this.router.navigate(['detailsTopicSubtopic',id]);
  }
  deleteTopic(id:number)
  {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this topic ??',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        // Call your service to delete the batch here
        this.topicService.deleteTopic(id).subscribe( (data)=>{
          console.log(data);
          this.getAll(); // Refresh the batch list after deletion
        });
        Swal.fire({
          title: 'Deleted!',
          text: 'Your topic has been deleted.',
          icon: 'success'
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: 'Cancelled',
          text: 'Your topic is safe :)',
          icon: 'error'
        });
      }
    });
  }
  updateTopic(id : number)
  {
    this.router.navigate(['updateTopic',id]);
  }

}
