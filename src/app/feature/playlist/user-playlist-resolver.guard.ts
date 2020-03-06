import { Injectable } from '@angular/core';
import { PlaylistModule } from './playlist.module';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { UserPlaylistState } from './store/user-playlist/user-playlist.state';
import { tap, finalize, first, retry } from 'rxjs/operators';
import { UserPlaylistActions } from './store/user-playlist/user-playlist.actions';

@Injectable()
export class UserPlaylistResolver implements Resolve<any> {
  routeLoading = false;
  @Select(UserPlaylistState.isLoaded) playlistsLoaded$: Observable<boolean>;

  constructor(private store: Store) { }

  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    return this.playlistsLoaded$
      .pipe(
        tap(playlistsLoaded => {
          if (!playlistsLoaded && !this.routeLoading) {
            this.routeLoading = true;
            return this.store.dispatch(new UserPlaylistActions.FetchUserPlaylists());
          }
        }),
        first(),
        finalize(() => {
          console.log("[USER PLAYLIST RESOLVER] FETCHING USER PLAYLIST COMPLETE");
          this.routeLoading = false;
        })
      );

  }
}
