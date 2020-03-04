export interface BasePlaylistResponseData {
  data: BasePlaylist[];
  total: number;
}

// DONE
export interface BasePlaylist {
  id: number;
  title: string;
  public: boolean;
  nbTracks: number;
  link: string;
  picture: string;
  pictureSmall: string;
  pictureMedium: string;
  pictureBig: string;
  pictureXl: string;
  checksum: string;
  tracklist: string;
  creationDate: Date;
  type: string;
}

export interface Creator {
  id: number;
  name: string;
  tracklist: string;
  type: string;
}
