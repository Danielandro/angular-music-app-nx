import { async, TestBed } from '@angular/core/testing';
import { MusicUtilGuardsModule } from './music-util-guards.module';

describe('MusicUtilGuardsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MusicUtilGuardsModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MusicUtilGuardsModule).toBeDefined();
  });
});
