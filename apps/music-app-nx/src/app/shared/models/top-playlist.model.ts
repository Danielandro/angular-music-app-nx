import { BasePlaylist, BasePlaylistResponseData } from './base-playlist.interface';

export interface TopPlaylistResponseData extends BasePlaylistResponseData {
  data: TopPlaylist[];
}

export interface TopPlaylist extends BasePlaylist {
  user: User;
  type: string;
}

export interface User {
  id: number;
  name: string;
  tracklist: string;
  type: string;
}
