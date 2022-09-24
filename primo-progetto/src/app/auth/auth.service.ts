import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = true
  isAdmin = true

  constructor() { }

  isAuthenticate() {
    return this.isLoggedIn
  }

  isRoleAdmin() {
    return this.isAdmin
  }
}
