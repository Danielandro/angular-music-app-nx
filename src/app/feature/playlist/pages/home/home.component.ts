import { Component, OnInit } from '@angular/core';
import { MusicApiService } from 'src/app/services/music-api.service';
import { Observable } from 'rxjs';
import { Artist } from 'src/app/shared/models/artist';
import { UserPlaylist } from 'src/app/shared/models/user-playlists.model';

@Component({
  selector: "app-home",
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pageTitle = "Your Playlists";
  userPlaylists$: Observable<UserPlaylist[]>;

  constructor(private musicApiService: MusicApiService) { }

  ngOnInit(): void {
    this.userPlaylists$ = this.musicApiService.getUserPlaylists();
  }

}
