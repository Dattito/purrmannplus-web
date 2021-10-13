import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn: boolean = false;

  constructor(private http: HttpClient) { }

  login() {}

  logout() {}

  checkIsLoggedIn() {}
}
