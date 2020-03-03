import { Component, OnInit } from '@angular/core';
import { MusicApiService } from 'src/app/services/music-api.service';
import { Observable } from 'rxjs';
import { Artist } from 'src/app/shared/models/artist';

@Component({
  selector: "artist-home",
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pageTitle: string = "Top Artists";
  artists$: Observable<Artist[]>;

  constructor(private musicApiService: MusicApiService) { }

  ngOnInit(): void {
    this.artists$ = this.musicApiService.getTopArtists();
  }

}
