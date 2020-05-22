import { async, TestBed } from '@angular/core/testing';
import { MusicFeatureAuthModule } from './music-feature-auth.module';

describe('MusicFeatureAuthModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MusicFeatureAuthModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MusicFeatureAuthModule).toBeDefined();
  });
});
