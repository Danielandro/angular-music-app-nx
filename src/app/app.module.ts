import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { NgxsModule } from "@ngxs/store";
import { NgxsLoggerPluginModule } from "@ngxs/logger-plugin";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { NgxsRouterPluginModule } from "@ngxs/router-plugin";
import { NgxsStoragePluginModule } from "@ngxs/storage-plugin";

import { AppComponent } from './app.component';
import { PlaylistModule } from './feature/playlist/playlist.module';
import { environment } from 'src/environments/environment';
import { AuthModule } from "./feature/auth/auth.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "playlists", loadChildren: () => import("./feature/playlist/playlist.module").then(m => m.PlaylistModule) },
      // { path: "**", redirectTo: "/playlists" }
    ]),
    AuthModule,
    // NGXS store
    NgxsModule.forRoot([], { developmentMode: !environment.production }),
    // Logger - console.log for every action
    NgxsLoggerPluginModule.forRoot(),
    // Redux devtools support
    NgxsReduxDevtoolsPluginModule.forRoot(),
    // Adds route info to state
    NgxsRouterPluginModule.forRoot(),
    // Adds localStorage capabilites
    NgxsStoragePluginModule.forRoot({
      key: "playlist"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
