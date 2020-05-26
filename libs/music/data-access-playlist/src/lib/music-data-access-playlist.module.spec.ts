import { async, TestBed } from '@angular/core/testing';
import { MusicDataAccessPlaylistModule } from './music-data-access-playlist.module';

describe('MusicDataAccessPlaylistModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MusicDataAccessPlaylistModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MusicDataAccessPlaylistModule).toBeDefined();
  });
});
