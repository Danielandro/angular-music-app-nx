import { State, Selector, StateContext, Action } from '@ngxs/store';
import { EntityState, createEntityAdapter } from 'ngxs-entity';
import { UserPlaylist } from 'src/app/shared/models/user-playlists.model';
import { UserPlaylistActions } from "./user-playlist.actions";
import { Injectable } from '@angular/core';
import { MusicApiService } from 'src/app/services/music-api.service';
import { tap, catchError } from 'rxjs/operators';

// add other state properties here
export interface UserPlaylistStateModel extends EntityState<UserPlaylist> {
  userPlaylistsLoaded: boolean;
  error?: boolean;
}

// create adapter. Tell it which model to use for entities.
// Access adapter methods and sort order of entites in store
const adapter = createEntityAdapter<UserPlaylist>();
// get adapter helper methods
const { selectAll } = adapter.getSelectors();

@State<UserPlaylistStateModel>({
  name: 'userPlaylists',
  defaults: adapter.getInitialState({
    userPlaylistsLoaded: false
  })
})
@Injectable()
export class UserPlaylistState {

  constructor(private musicApiService: MusicApiService) { }

  // SELECTORS
  @Selector()
  public static getState(state: UserPlaylistStateModel) {
    return state;
  }

  @Selector()
  public static isLoaded(state: UserPlaylistStateModel) {
    return state.userPlaylistsLoaded;
  }

  @Selector()
  public static selectPlaylists(state: UserPlaylistStateModel) {
    return selectAll(state);
  }


  // ACTIONS
  @Action(UserPlaylistActions.FetchUserPlaylists)
  fetchPlaylists({ dispatch }: StateContext<UserPlaylistStateModel>) {
    return this.musicApiService.getUserPlaylists()
      .pipe(
        tap((playlists) => dispatch(new UserPlaylistActions.FetchSuccessful(playlists))),
        catchError(err => dispatch(new UserPlaylistActions.FetchFailed(err)))
      );
  }

  @Action(UserPlaylistActions.FetchSuccessful)
  fetchSuccessful({ getState, patchState }: StateContext<UserPlaylistStateModel>, { payload }: UserPlaylistActions.FetchSuccessful) {
    const state = getState();

    patchState({
      ...adapter.addAll(payload, state),
      userPlaylistsLoaded: true
    });
  }

  @Action(UserPlaylistActions.FetchFailed)
  fetchFailed({ getState, patchState }: StateContext<UserPlaylistStateModel>, { error }: UserPlaylistActions.FetchFailed) {
    const state = getState();
    console.log("Error fetching user playlists: ", error);

    patchState({
      ...state,
      error: true
    });
  }
}
