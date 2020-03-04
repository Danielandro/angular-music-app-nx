import { BasePlaylist, Creator } from './basePlaylist';

export interface SinglePlaylist extends BasePlaylist {
  description: string;
  duration: number;
  isLovedTrack: boolean;
  collaborative: boolean;
  fans: number;
  share: string;
  creator: Creator;
  type: string;
  tracks: Tracks;
}

export interface Tracks {
  data: PlaylistTrack[];
  checksum: string;
}

export interface PlaylistTrack {
  id: number;
  readable: boolean;
  title: string;
  titleShort: string;
  titleVersion?: string;
  link: string;
  duration: number;
  rank: number;
  explicitLyrics: boolean;
  explicitContentLyrics: number;
  explicitContentCover: number;
  preview: string;
  timeAdd: number;
  artist: Creator;
  album: Album;
  type: string;
}

export interface Album {
  id: number;
  title: string;
  cover: string;
  coverSmall: string;
  coverMedium: string;
  coverBig: string;
  coverXl: string;
  tracklist: string;
  type: string;
}
