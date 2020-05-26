import { async, TestBed } from '@angular/core/testing';
import { MusicFeaturePlaylistModule } from './music-feature-playlist.module';

describe('MusicFeaturePlaylistModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MusicFeaturePlaylistModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MusicFeaturePlaylistModule).toBeDefined();
  });
});
