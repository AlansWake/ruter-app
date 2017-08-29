import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: any;

    constructor(public auth: AuthService) { }

    ngOnInit() {
      if (this.auth.userProfile) {
        this.profile = this.auth.userProfile;
      } else {
        this.auth.getProfile((err, profile) => {
          this.profile = profile;
        });
      }
    }

}

/*
// src/app/ping/ping.component.ts

import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/map';

// ...
export class PingComponent {

  API_URL: string = 'http://<your-application-domain>/api';
  message: string;

  constructor(public authHttp: AuthHttp) {}

  public securedPing(): void {
    this.message = '';
    this.authHttp.get(`${this.API_URL}/private`)
      .map(res => res.json())
      .subscribe(
        data => this.message = data.message,
        error => this.message = error
      );
  }
}
*/
