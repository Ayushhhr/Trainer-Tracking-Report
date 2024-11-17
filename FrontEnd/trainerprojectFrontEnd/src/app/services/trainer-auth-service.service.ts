import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainerAuthServiceService {

  baseUrl = "http://localhost:8088"

  constructor(private http: HttpClient) { }

  // Method to authenticate a trainer
  authenticateTrainer(username: string, password: string): Observable<any[]> 
  {
    console.log("inside authenticate");
    return this.http.get<any[]>(`${this.baseUrl}/trainer/authenticate/${username}/${password}`);

  }
}
