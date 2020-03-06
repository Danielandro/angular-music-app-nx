import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { NgxsModule } from "@ngxs/store";

import { PlaylistItemComponent } from './components/playlist-item/playlist-item.component';
import { PlaylistHomeComponent } from './pages/playlist-home/playlist-home.component';
import { UserPlaylistResolver } from './user-playlist-resolver.guard';
import { PlaylistState } from './store/playlist.state';
import { UserPlaylistState } from './store/user-playlist/user-playlist.state';

@NgModule({
  declarations: [
    PlaylistHomeComponent,
    PlaylistItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "", component: PlaylistHomeComponent, resolve: [UserPlaylistResolver] }
    ]),
    NgxsModule.forFeature([PlaylistState, UserPlaylistState])
  ],
  exports: [
    PlaylistHomeComponent
  ],
  providers: [
    UserPlaylistResolver
  ]
})
export class PlaylistModule { }
