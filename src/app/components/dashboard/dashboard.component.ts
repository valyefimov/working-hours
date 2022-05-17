import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public userData;
  
  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.userData = this.authService.userData;
  }
  
  onSignOut() {
    this.authService.SignOut();
  }

}
