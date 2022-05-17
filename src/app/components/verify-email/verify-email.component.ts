import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {
  public userData;
  
  constructor(
    public authService: AuthService,
  ) { }
  ngOnInit() {
    this.userData = this.authService.userData;
  }

  onSendVerificationMail() {
    this.authService.SendVerificationMail();
  }
}
