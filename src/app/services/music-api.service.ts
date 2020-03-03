import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";
import { Artist } from '../shared/models/artist';

@Injectable({
  providedIn: 'root'
})
export class MusicApiService {
  musicApiUrl = "https://cors-anywhere.herokuapp.com/https://api.deezer.com";
  resultsLimit = 10;
  resultsOffset = 0; // offset for pagination

  constructor(private http: HttpClient) { }

  getTopArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(`${this.musicApiUrl}/chart/0/artists/`)
      .pipe(
        tap((res) => console.log("Top 10 Artists: ", res))
      );
  }
}
