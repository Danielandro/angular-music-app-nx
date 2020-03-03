import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Playlist } from 'src/app/shared/models/playlist';

@Component({
  selector: 'app-playlist-item',
  templateUrl: './playlist-item.component.html',
  styleUrls: ['./playlist-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaylistItemComponent implements OnInit {
  @Input() playlist: Playlist;
  constructor() { }

  ngOnInit(): void {
  }

}
