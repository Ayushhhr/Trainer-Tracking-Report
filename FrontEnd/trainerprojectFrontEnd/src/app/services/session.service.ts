import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private sessionKey = 'loggedIn';

  constructor() { }

  isSessionActive(): boolean {
    return sessionStorage.getItem(this.sessionKey) === 'true';
  }

  setSessionActive(active: boolean): void {
    sessionStorage.setItem(this.sessionKey, active ? 'true' : 'false');
  }

  clearSession(): void {
    sessionStorage.removeItem(this.sessionKey);
  }
}
