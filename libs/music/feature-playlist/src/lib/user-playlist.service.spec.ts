import { TestBed } from '@angular/core/testing';

import { UserPlaylistResolver } from './user-playlist-resolver.guard';

describe('UserPlaylistService', () => {
  let service: UserPlaylistResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserPlaylistResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
