import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { NgxsModule } from "@ngxs/store";

import { PlaylistItemComponent } from './components/playlist-item/playlist-item.component';
import { PlaylistListComponent } from './components/playlist-list/playlist-list.component';
import { HomeComponent } from './pages/home/home.component';
import { UserPlaylistResolver } from './user-playlist-resolver.guard';
import { PlaylistState } from './store/playlist.state';
import { UserPlaylistState } from './store/user-playlist/user-playlist.state';

@NgModule({
  declarations: [
    HomeComponent,
    PlaylistListComponent,
    PlaylistItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "", component: HomeComponent, resolve: [UserPlaylistResolver] }
    ]),
    NgxsModule.forFeature([PlaylistState, UserPlaylistState])
  ],
  exports: [
    HomeComponent
  ],
  providers: [
    UserPlaylistResolver
  ]
})
export class PlaylistModule { }
