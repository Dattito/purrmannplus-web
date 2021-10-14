import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  isLoggedIn: boolean = false;
  isLoggedInSub?: Subscription;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.isLoggedInSub = this.auth.loggedInStatus.subscribe(state => {
      this.isLoggedIn = state;
      console.log(state);
    });
  }

  ngOnDestroy(): void {
    this.isLoggedInSub?.unsubscribe();
  }

  onLogout() {
    this.auth.logout();
  }
}
 