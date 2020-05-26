import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '@angular-music-app/music/data-access-playlist';
import { Observable } from 'rxjs';
import { Artist } from '@angular-music-app/music/api-interfaces-music';
import { UserPlaylist } from '@angular-music-app/music/api-interfaces-music';
import { Select } from '@ngxs/store';
import { UserPlaylistState } from '@angular-music-app/music/state/state-playlist';
import { ErrorData } from '@angular-music-app/music/api-interfaces-music';

@Component({
  selector: 'app-home',
  templateUrl: './playlist-home.component.html',
  styleUrls: ['./playlist-home.component.scss']
})
export class PlaylistHomeComponent implements OnInit {
  pageTitle = 'Your Playlists';
  @Select(UserPlaylistState.selectPlaylists) userPlaylists$: Observable<UserPlaylist[]>;
  @Select(UserPlaylistState.selectError) fetchError$: Observable<ErrorData>;

  constructor(private playlistService: PlaylistService) { }

  ngOnInit(): void {

  }

}
