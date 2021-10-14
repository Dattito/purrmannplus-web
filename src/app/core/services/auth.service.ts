import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedInStatus = new Subject<boolean>();

  constructor(private config: ConfigService, private http: HttpClient) { }

  login(username: string, password: string, stayLoggedIn: boolean): Observable<any> {
    return this.http.post<boolean>(this.config.apiUrl + '/v1/login', { username, password, stay_logged_in: stayLoggedIn, store_in_cookie: true }).pipe(
      map(res => {
        if (res) {
          this.loggedInStatus.next(true);
        }
        return res;
      }),
      catchError(err => {
        this.loggedInStatus.next(false);
        return err;
      })
    );
  }

  logout() {
    this.http.get(this.config.apiUrl + '/v1/logout', { responseType: 'text' }).subscribe(res => {
      this.loggedInStatus.next(false);
    }, err => {
      console.log(err);
    });
  }

  checkIsLoggedIn() {
    this.http.get<boolean>(this.config.apiUrl + '/v1/login_check').subscribe(
      res => {
        this.loggedInStatus.next(true);
        return true;
      },
      err => {
        console.log(err);
        if (err.status === 401) {
          this.loggedInStatus.next(false);
        }
        return err;
      }
    );
  }
}
