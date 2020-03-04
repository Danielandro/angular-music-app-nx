export interface BasePlaylistResponseData {
  data: BasePlaylist[];
  total: number;
}

// DONE
export interface BasePlaylist {
  id: number;
  title: string;
  public: boolean;
  nb_tracks: number;
  link: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  checksum: string;
  tracklist: string;
  creation_date: Date;
  type: string;
}

export interface Creator {
  id: number;
  name: string;
  tracklist: string;
  type: string;
}
