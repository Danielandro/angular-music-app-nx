import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PlaylistModule } from './feature/playlist/playlist.module';

import { MusicFeatureAuthModule } from '@angular-music-app/music/feature-auth';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    RouterModule.forRoot([
      { path: 'playlists', loadChildren: () => import('./feature/playlist/playlist.module').then(m => m.PlaylistModule) },
      // { path: "**", redirectTo: "/playlists" }
    ]),
    MusicFeatureAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
