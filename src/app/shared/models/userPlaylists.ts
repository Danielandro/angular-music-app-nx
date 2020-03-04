import { BasePlaylist, BasePlaylistResponseData, Creator } from './basePlaylist';

export interface UserPlaylistResponseData extends BasePlaylistResponseData {
  data: UserPlaylist[];
  checksum: string;
}

export interface UserPlaylist extends BasePlaylist {
  duration: number;
  isLovedTrack: boolean;
  collaborative: boolean;
  fans: number;
  timeAdd: number;
  timeMod: number;
  creator: Creator;
}


