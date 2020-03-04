import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { NgxsModule } from "@ngxs/store";
import { NgxsLoggerPluginModule } from "@ngxs/logger-plugin";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { NgxsRouterPluginModule } from "@ngxs/router-plugin";

import { AppComponent } from './app.component';
import { PlaylistModule } from './feature/playlist/playlist.module';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PlaylistModule,
    // NGXS store
    NgxsModule.forRoot([], { developmentMode: !environment.production }),
    // Logger - console.log for every action
    NgxsLoggerPluginModule.forRoot(),
    // Redux devtools support
    NgxsReduxDevtoolsPluginModule.forRoot(),
    // Adds route info to state
    // NgxsRouterPluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
