import { State, Selector } from '@ngxs/store';
import { EntityState, createEntityAdapter } from 'ngxs-entity';
import { UserPlaylistState } from './user-playlist/user-playlist.state';
import { Injectable } from '@angular/core';

export interface PlaylistStateModel { }

@State<PlaylistStateModel>({
  name: 'playlist',
  children: [UserPlaylistState]
})
@Injectable()
export class PlaylistState {

  @Selector()
  public static getState(state: PlaylistStateModel) {
    return state;
  }

}
