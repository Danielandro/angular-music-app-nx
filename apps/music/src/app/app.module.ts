import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
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
      {
        path: 'playlists',
        loadChildren: () => import('@angular-music-app/music/feature-playlist').then(m => m.MusicFeaturePlaylistModule)
      },
      // { path: 'playlists', loadChildren: '@angular-music-app/music/feature-playlist#MusicFeaturePlaylistModule' },
      // { path: "**", redirectTo: "/playlists" }
    ]),
    MusicFeatureAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
