import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaughtHoursService {

  baseUrl = "http://localhost:8088"

  constructor(private http: HttpClient) { }

  getTaughtHours(batchId: number, subtopicId: number): Observable<number>
  {
    console.log("Inside Thrs");
    return this.http.get<number>(`${this.baseUrl}/tsa/${batchId}/${subtopicId}`);
  }
}
