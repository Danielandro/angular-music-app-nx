import { UserPlaylist } from '@angular-music-app/music/api-interfaces-music';
import { ErrorData, PlaylistError } from '@angular-music-app/music/api-interfaces-music';

// tslint:disable-next-line:no-namespace
export namespace UserPlaylistActions {
  export class FetchUserPlaylists {
    public static readonly type = '[Playlist Resolver] Fetch User Playlists';
  }
  export class FetchSuccessful {
    public static readonly type = '[Fetch Playlists Action] Fetch Successful';
    constructor(public payload: UserPlaylist[]) { }
  }
  export class FetchFailed {
    public static readonly type = '[Fetch Playlists Action] Fetch Failed';
    constructor(public payload: PlaylistError) { }
  }
}
