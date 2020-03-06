import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { tap, map, catchError } from "rxjs/operators";
import { Artist } from '../../shared/models/artist';
import { SinglePlaylist } from '../../shared/models/single-playlist.model';
import { TopPlaylistResponseData, TopPlaylist } from "../../shared/models/top-playlist.model";
import { UserPlaylistResponseData, UserPlaylist } from "../../shared/models/user-playlist.model";
import { CoreModule } from '../core.module';

@Injectable({
  providedIn: CoreModule
})
export class MusicApiService {
  musicApiUrl = "https://cors-anywhere.herokuapp.com/https://api.deezer.com";
  resultsLimit = 10;
  resultsOffset = 0; // offset for pagination

  constructor(private http: HttpClient) { }

  // getTopArtists(): Observable<Artist[]> {
  //   return this.http.get<Artist[]>(`${this.musicApiUrl}/chart/0/artists/`)
  //     .pipe(
  //       tap((res) => console.log("Top 10 Artists: ", res))
  //     );
  // }

  getPlaylist(): Observable<SinglePlaylist> {
    return this.http.get<SinglePlaylist>(`${this.musicApiUrl}/playlist/908622995`).
      pipe(
        tap(res => console.log("Playlist: ", res)),
        catchError(err => this.handleError(err))
      );
  }

  getTopPlaylists(
    limit: number = this.resultsLimit,
    offset: number = this.resultsOffset): Observable<TopPlaylist[]> {
    return this.http.get<TopPlaylistResponseData>(`${this.musicApiUrl}/chart/0/playlists?index=${offset}&limit=${limit}`)
      .pipe(
        map(res => res.data),
        catchError(err => this.handleError(err))
      );
  }

  getUserPlaylists(
    limit: number = this.resultsLimit,
    offset: number = this.resultsOffset): Observable<UserPlaylist[]> {
    return this.http.get<UserPlaylistResponseData>(`api/user/3236861244/playlists`)
      .pipe(
        map(res => {
          console.log("API RESPONSE: ", res);
          return res.data;
        }),
        tap(data => console.log("User Playlists: ", data)),
        catchError(err => this.handleError(err))
      );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occured. Handle it accordingly!
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.log("ERROR FROM MUSIC API: ", errorMessage);
    return throwError(errorMessage);
  }
}


// https://connect.deezer.com/oauth/auth.php?app_id=398684&redirect_uri=localhost:4200&perms=basic_access,email
