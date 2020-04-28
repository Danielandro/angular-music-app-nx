import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public authUrl = this.authService.authUrl;

  constructor(private authService: AuthService) { }

}
