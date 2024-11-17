import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Batch } from '../models/Batch';
import { Trainer } from '../models/Trainer';

@Injectable({
  providedIn: 'root'
})
export class BatchTrainerServiceService {
  baseUrl = "http://localhost:8088";

  constructor(private http:HttpClient)
  {

  }
  getOneBatch(id : number): Observable <any>
  {
    console.log("inside service get one batch");
    return this.http.get(`${this.baseUrl}/batch/getOne/${id}`)
  }

  getOneTrainer(id : number): Observable <any>
  {
    console.log("inside service get one trainer");
    return this.http.get(`${this.baseUrl}/trainer/getOne/${id}`)
  }

  getAllBatches():any
  {
    return this.http.get(`${this.baseUrl}/batch/getAll`);
  }

  getAllTrainers():any
  {
    return this.http.get(`${this.baseUrl}/trainer/getAll`);
  }
  
  addBatch(batch: Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}/batch/add`,batch);
  }

  addTrainer(trainer: Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}/trainer/add`,trainer);
  }
  updateBatch(batch : Batch)
  {
    return this.http.put(`${this.baseUrl}/batch/update`,batch);
  }
  deleteBatch(id:number): Observable <any>
  {
    return this.http.delete(`${this.baseUrl}/batch/delete/${id}`, {responseType: 'text'});
  }
  updateTrainer(trainer : Trainer)
  {
    return this.http.put(`${this.baseUrl}/trainer/update`,trainer);
  }
  deleteTrainer(id:number): Observable <any>
  {
    return this.http.delete(`${this.baseUrl}/trainer/delete/${id}`, {responseType: 'text'});
  }
  deleteProfileFromBatch(bid:number, pid:number): Observable <any>
  {
    console.log("Inside deleteProfileFromBatch")
    console.log("Bid: ",bid);
    console.log("Pid: ",pid);
    return this.http.delete(`${this.baseUrl}/batch/delete/${bid}/${pid}`, {responseType: 'text'});
  }
}
