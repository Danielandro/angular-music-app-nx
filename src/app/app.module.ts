import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PlaylistModule } from './feature/playlist/playlist.module';

import { AuthModule } from './feature/auth/auth.module';
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
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
