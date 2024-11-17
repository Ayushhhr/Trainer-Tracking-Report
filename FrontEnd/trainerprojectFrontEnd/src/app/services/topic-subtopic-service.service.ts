import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubTopic } from '../models/SubTopic';
import { HttpClient } from '@angular/common/http';
import { Topic } from '../models/Topic';

@Injectable({
  providedIn: 'root'
})
export class TopicSubtopicServiceService {

 
  baseUrl = "http://localhost:8088"

  constructor(private http:HttpClient)
  {

  }

  getOneSubtopic(id : number): Observable <any>
  {
    console.log("inside service get one subtopic");
    return this.http.get(`${this.baseUrl}/subtopic/getOne/${id}`)
  }

  getOneTopic(id : number): Observable <any>
  {
    console.log("inside service get one topic");
    return this.http.get(`${this.baseUrl}/topic/getOne/${id}`)
  }

  getAllSubtopics():any
  {
    return this.http.get(`${this.baseUrl}/subtopic/getAll`);
  }

  getAllTopics():any
  {
    return this.http.get(`${this.baseUrl}/topic/getAll`);
  }
  
  addSubtopic(subtopic: Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}/subtopic/add`,subtopic);
  }

  addTopic(topic: Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}/topic/add`,topic);
  }
  updateTopic(topic : Topic)
  {
    return this.http.put(`${this.baseUrl}/topic/update`,topic);
  }
  deleteTopic(id:number): Observable <any>
  {
    return this.http.delete(`${this.baseUrl}/topic/delete/${id}`, {responseType: 'text'});
  }
  updateSubtopic(subtopic : SubTopic)
  {
    return this.http.put(`${this.baseUrl}/subtopic/update`,subtopic);
  }
  deleteSubtopic(id:number): Observable <any>
  {
    return this.http.delete(`${this.baseUrl}/subtopic/delete/${id}`, {responseType: 'text'});
  }
}
