import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HomeComponent } from './feature/playlist/pages/home/home.component';
import { PlaylistItemComponent } from './feature/playlist/components/playlist-item/playlist-item.component';
import { PlaylistListComponent } from './feature/playlist/components/playlist-list/playlist-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlaylistItemComponent,
    PlaylistListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
