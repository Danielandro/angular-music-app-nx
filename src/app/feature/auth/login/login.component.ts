import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  authUrl = this.authService.authUrl;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    // this.authService.login();
  }



}
