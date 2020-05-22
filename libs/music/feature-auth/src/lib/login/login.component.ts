import { Component } from '@angular/core';
import { AuthService } from '@angular-music-app/music/data-access-auth';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public authUrl = this.authService.authUrl;

  constructor(private authService: AuthService) { }

}
