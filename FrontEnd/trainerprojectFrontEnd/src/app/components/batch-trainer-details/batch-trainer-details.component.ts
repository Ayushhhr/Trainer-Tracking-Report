import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BatchTrainerServiceService } from '../../services/batch-trainer-service.service';
import { Batch } from '../../models/Batch';

@Component({
  selector: 'app-batch-trainer-details',
  templateUrl: './batch-trainer-details.component.html',
  styleUrl: './batch-trainer-details.component.css'
})
export class BatchTrainerDetailsComponent {

  constructor(private route: ActivatedRoute, private router: Router,private service: BatchTrainerServiceService)
  {
    
  }

  bid : number = 0;
  batch : Batch = new Batch();
  visit : boolean = true;
  ngOnInit()
  {
    this.batch = new Batch();

    this.bid = this.route.snapshot.params['bid'];

    this.service.getOneBatch(this.bid).subscribe((data) =>{
      console.log(data);
      this.batch = data;
    })
  }
  list()
  {
    this.router.navigate(['listBatch']);
  }

  batchDetails(id : string)
  {
    return this.service.getOneBatch(Number(id)).subscribe((data) =>{
      this.batch = data;
      console.log(data);
      console.log(this.batch);

      this.visit = true;
    })
  }
  batchwiseDetails(bid: number, id : number)
  {
    this.router.navigate(['batchwiseTrainerTopics',bid,id]);
  }
}
