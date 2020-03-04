import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { tap, map } from "rxjs/operators";
import { Artist } from '../shared/models/artist';
import { SinglePlaylist } from '../shared/models/singlePlaylist';
import { TopPlaylistResponseData, TopPlaylist } from "../shared/models/topPlaylists";
import { UserPlaylistResponseData, UserPlaylist } from "../shared/models/userPlaylists";

@Injectable({
  providedIn: 'root'
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
        tap(res => console.log("Playlist: ", res))
      );
  }

  getTopPlaylists(
    limit: number = this.resultsLimit,
    offset: number = this.resultsOffset): Observable<TopPlaylist[]> {
    return this.http.get<TopPlaylistResponseData>(`${this.musicApiUrl}/chart/0/playlists?index=${offset}&limit=${limit}`)
      .pipe(
        map(res => res.data)
      );
  }

  getUserPlaylists(
    limit: number = this.resultsLimit,
    offset: number = this.resultsOffset): Observable<UserPlaylist[]> {
    return this.http.get<UserPlaylistResponseData>(`${this.musicApiUrl}/user/3236861244/playlists`)
      .pipe(
        map(res => res.data),
        tap(playlists => console.log("User Playlists: ", playlists))
      );
  }
}
