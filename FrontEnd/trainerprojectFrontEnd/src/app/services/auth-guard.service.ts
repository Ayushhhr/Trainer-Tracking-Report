import { Injectable } from '@angular/core';
import { AdminAuthService } from './admin-auth.service';
import { Router } from '@angular/router';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private authService: AdminAuthService, private sessionService: SessionService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated() && this.sessionService.isSessionActive()) {
      return true;
    } else {
      // Clear forward history
      window.history.pushState({}, document.title, '/');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
