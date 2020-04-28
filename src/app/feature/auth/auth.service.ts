import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  private readonly appId = '398684';
  private readonly redirectUri = 'http://127.0.0.1:4200/playlists';
  private readonly permissions = 'basic_access,email,offline_access,manage_library,delete_library';
  private readonly responseType = 'token';

  public readonly authUrl = `https://connect.deezer.com/oauth/auth.php?
    app_id=${this.appId}&
    redirect_uri=${this.redirectUri}&
    perms=${this.permissions}&
    response_type=${this.responseType}`;

  private readonly baseAuthUrl = 'https://connect.deezer.com/oauth/auth.php?';
  private readonly authOptions = new HttpHeaders({
    app_id: this.appId,
    redirect_uri: this.redirectUri,
    perms: this.permissions,
    response_type: this.responseType
  });

  constructor(private http: HttpClient, private router: Router) { }


}
