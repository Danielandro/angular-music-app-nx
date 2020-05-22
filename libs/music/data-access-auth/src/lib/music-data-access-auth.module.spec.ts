import { async, TestBed } from '@angular/core/testing';
import { MusicDataAccessAuthModule } from './music-data-access-auth.module';

describe('MusicDataAccessAuthModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MusicDataAccessAuthModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MusicDataAccessAuthModule).toBeDefined();
  });
});
