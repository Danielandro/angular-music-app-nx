import { State, Selector } from '@ngxs/store';
import { EntityState, createEntityAdapter } from "ngxs-entity";
import { UserPlaylistState } from './user-playlist/user-playlist.state';

export interface PlaylistStateModel { }

@State<PlaylistStateModel>({
  name: 'playlist',
  children: [UserPlaylistState]
})
export class PlaylistState {

  @Selector()
  public static getState(state: PlaylistStateModel) {
    return state;
  }

}
