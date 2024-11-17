import { Component,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SubTopic } from '../../../models/SubTopic';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { TopicSubtopicServiceService } from '../../../services/topic-subtopic-service.service';
import { UpdateSubtopicComponent } from '../../update/update-subtopic/update-subtopic.component';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-subtopic-list',
  templateUrl: './subtopic-list.component.html',
  styleUrl: './subtopic-list.component.css',
  
})
export class SubtopicListComponent {
  public subtopics : Observable<SubTopic[]> = of([]);
  searchtext:any;
  @ViewChild('paginator') paginator!:MatPaginator
  displayedColums:string[]=['position','name','hours','action'];
  dataSource!:MatTableDataSource<SubTopic>;
  ngAfterViewInit(){
    this.getAlls();
  }
  getAlls() {
    this.subtopics = this.subtopicService.getAllSubtopics();
    this.subtopics.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }
  
  constructor(private subtopicService: TopicSubtopicServiceService, private router: Router)
  {
    
  }

  ngOnInit()
  {
    this.getAll();
  }

  getAll()
  {
    this.subtopics = this.subtopicService.getAllSubtopics();
  }

  deleteSubtopic(id:number)
  {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this batch ??',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        // Call your service to delete the batch here
        this.subtopicService.deleteSubtopic(id).subscribe((data)=>{
          console.log(data);
          this.getAll(); // Refresh the batch list after deletion
        });
        Swal.fire({
          title: 'Deleted!',
          text: 'Your batch has been deleted.',
          icon: 'success'
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: 'Cancelled',
          text: 'Your batch is safe :)',
          icon: 'error'
        });
      }
    });

  }
  updateSubtopic(id : number)
  {
    this.router.navigate(['updateSubtopic',id]);
  }

 
}
