export interface Playlist {
  id: string;
  title: string;
  description: string;
  duration: number;
  public: boolean;
  is_loved_track: boolean;
  collaborative: boolean;
  nb_tracks: number;
  fans: number;
  link: string;
  share: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  checksum: string;
  tracklist: string;
  creation_date: string;
  creator: Creator;
  type: string;
  tracks: Tracks;
}
export interface Creator {
  id: string;
  name: string;
  tracklist: string;
  type: string;
}
export interface Tracks {
  data?: (DataEntity)[] | null;
  checksum: string;
}
export interface DataEntity {
  id: string;
  readable: boolean;
  title: string;
  title_short: string;
  title_version?: string | null;
  link: string;
  duration: string;
  rank: string;
  explicit_lyrics: boolean;
  explicit_content_lyrics: number;
  explicit_content_cover: number;
  preview: string;
  time_add: number;
  artist: Artist;
  album: Album;
  type: string;
}
export interface Artist {
  id: string;
  name: string;
  link: string;
  tracklist: string;
  type: string;
}
export interface Album {
  id: string;
  title: string;
  cover: string;
  cover_small: string;
  cover_medium: string;
  cover_big: string;
  cover_xl: string;
  tracklist: string;
  type: string;
}
