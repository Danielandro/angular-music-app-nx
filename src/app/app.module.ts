import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HomeComponent } from './feature/playlist/pages/home/home.component';
import { PlaylistItemComponent } from './feature/playlist/components/playlist-item/playlist-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlaylistItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
