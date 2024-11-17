import { Component } from '@angular/core';
import { Batch } from '../../../models/Batch';
import { Observable, of } from 'rxjs';
import { BatchTrainerServiceService } from '../../../services/batch-trainer-service.service';
import { Router } from '@angular/router';
import { Document, Packer, Paragraph } from "docx";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-batch-list',
  templateUrl: './batch-list.component.html',
  styleUrl: './batch-list.component.css'
})
export class BatchListComponent {
  public batches : Observable<Batch[]> = of([]);
  searchtext:any;
  
  constructor(private service: BatchTrainerServiceService, private router : Router)
  {

  }

  ngOnInit()
  {
    this.getAll();
  }
  getAll()
  {
    this.batches = this.service.getAllBatches();
  }
  batchDetails(id : number)
  {
    this.router.navigate(['detailsBatchTrainer',id]);
  }
  deleteBatch(id:number)
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
        this.service.deleteBatch(id).subscribe((data) => {
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
  
  updateBatch(id : number)
  {
    this.router.navigate(['updateBatch',id]);
  }

  downloadBatchData(batchId: number) {
    // Call your service to fetch specific batch data by ID
    this.service.getOneBatch(batchId).subscribe((batch) => {
      // Prepare batch data for Word document
      const doc = new Document({
        sections: [{
          properties: {},
          children: [
            new Paragraph({ text: `Batch Name: ${batch.name}` }),
            new Paragraph({ text: `Start Date: ${batch.startDate}` }),
            new Paragraph({ text: `End Date: ${batch.endDate}` })
          ]
        }]
      });
  
      // Convert Word document to buffer
      Packer.toBuffer(doc).then((buffer) => {
        // Save buffer as Word file
        const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `batch_${batchId}_data.docx`;
        link.click();
        window.URL.revokeObjectURL(url);
      });
    });
  }
  isBatchCompleted(endDate: string): boolean {
    // Get current date
    const currentDate = new Date();
    // Convert end date string to Date object
    const batchEndDate = new Date(endDate);
    // Compare end date with current date
    return batchEndDate < currentDate;
  }
  
}
