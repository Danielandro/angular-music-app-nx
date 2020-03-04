import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { UserPlaylist } from "../../../../shared/models/user-playlists.model";

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaylistListComponent implements OnInit {
  @Input() playlists: UserPlaylist[];
  constructor() { }

  ngOnInit(): void {
  }

}
