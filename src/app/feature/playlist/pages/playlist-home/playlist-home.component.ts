import { Component, OnInit } from '@angular/core';
import { MusicApiService } from 'src/app/services/music-api.service';
import { Observable } from 'rxjs';
import { Artist } from 'src/app/shared/models/artist';
import { UserPlaylist } from 'src/app/shared/models/user-playlist.model';
import { Select } from '@ngxs/store';
import { UserPlaylistState } from '../../store/user-playlist/user-playlist.state';

@Component({
  selector: "app-home",
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class PlaylistHomeComponent implements OnInit {
  pageTitle = "Your Playlists";
  @Select(UserPlaylistState.selectPlaylists) userPlaylists$: Observable<UserPlaylist[]>;
  @Select(UserPlaylistState.isError) fetchError: Observable<boolean>;

  constructor(private musicApiService: MusicApiService) { }

  ngOnInit(): void {

  }

}
