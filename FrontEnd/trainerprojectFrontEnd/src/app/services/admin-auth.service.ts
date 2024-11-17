//adminauth service
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { Observable, catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {
  baseUrl = "http://localhost:8088"
  router: any;

  constructor(private http: HttpClient) { }

  // Method to authenticate a trainer
  authenticateAdmin(username: string, password: string): Observable<any[]> 
  {
    console.log("inside authenticate");
    return this.http.get<any[]>(`${this.baseUrl}/admin/authenticate/${username}/${password}`).pipe(
      tap(response => console.log("Response from server:", response)),
      catchError(error => {
        console.error("Error:", error);
        throw error; // Rethrow the error to be handled by the caller
      })
    );
  }

  logout(): void {
    // Clear any session-related data
    // For example, clear user data from local storage
    localStorage.removeItem('userData');

     // Navigate to the login page and replace the current history
     const navigationExtras: NavigationExtras = {
      replaceUrl: true
    };
    this.router.navigate(['/login'], navigationExtras);
  }

  isAuthenticated(): boolean {
    // Check if the user is authenticated
    // For example, check if user data exists in local storage
    return !!localStorage.getItem('userData');
  }
}
