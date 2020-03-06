import { UserPlaylist } from 'src/app/shared/models/user-playlist.model';

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
    constructor(public error: any) { }
  }
}
