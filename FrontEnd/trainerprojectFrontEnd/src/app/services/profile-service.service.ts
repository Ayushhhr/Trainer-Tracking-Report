import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Profile } from '../models/Profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {
  
  baseUrl = "http://localhost:8088";

  constructor(private http:HttpClient, private router: Router)
  {

  }
  getOneProfile(id : number): Observable <any>
  {
    console.log("inside service get one profile");
    return this.http.get(`${this.baseUrl}/profile/getOne/${id}`)
  }
  getAllProfiles():any
  {
    return this.http.get(`${this.baseUrl}/profile/getAll`);
  }

  addProfile(profiles: Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}/profile/add`,profiles);
  }
  updateProfile(profile : Profile)
  {
    return this.http.put(`${this.baseUrl}/profile/update`,profile);
  }
  deleteProfile(id:number): Observable <any>
  {
    return this.http.delete(`${this.baseUrl}/profile/delete/${id}`, {responseType: 'text'});
  }
  getAllBatches():any
  {
    return this.http.get(`${this.baseUrl}/profile/getBatch`);
  }
  getAssociatedBatches(profileId: number):any
  {
    return this.http.get(`${this.baseUrl}/batch/profile/getBatch/${profileId}`);
  } 
  getUsernameById(profileId: number): Observable<any> 
  {
    return this.http.get(`${this.baseUrl}/profile/getUsername/${profileId}`);
  } 

}
