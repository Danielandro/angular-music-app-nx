import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { UserPlaylistState, UserPlaylistStateModel } from './user-playlist.state';

describe('UserPlaylist state', () => {
  let store: Store;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([UserPlaylistState])]
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should create an empty state', () => {
    const actual = store.selectSnapshot(UserPlaylistState.getState);
    const expected: UserPlaylistStateModel = {
      ids: [],
      entities: {},
      loaded: false,
      fetchError: null
    };
    expect(actual).toEqual(expected);
  });

});
