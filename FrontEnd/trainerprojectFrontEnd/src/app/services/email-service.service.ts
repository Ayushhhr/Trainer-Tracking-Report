import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {
  baseUrl = "http://localhost:8088";

  constructor(private http:HttpClient)
  {

  }

  sendEmail(email: string, subject: string, msgString: string): Observable<any> {
    const emailRequest = {
      subject: subject,
      msgString: msgString
    };
    return this.http.post<any>(`${this.baseUrl}/sendMail/${email}`, emailRequest);
  }
}
