import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-index-site',
  templateUrl: './index-site.component.html',
  styleUrls: ['./index-site.component.scss']
})
export class IndexSiteComponent implements OnInit {

  constructor(private auth: AuthService) {
  }

  ngOnInit(): void {
  }

  onCheckLogin() {
    this.auth.checkIsLoggedIn();
  }
}
