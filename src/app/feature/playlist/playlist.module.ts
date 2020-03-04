import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxsModule } from "@ngxs/store";

import { PlaylistItemComponent } from './components/playlist-item/playlist-item.component';
import { PlaylistListComponent } from './components/playlist-list/playlist-list.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    HomeComponent,
    PlaylistListComponent,
    PlaylistItemComponent
  ],
  imports: [
    CommonModule,
    NgxsModule.forFeature([])
  ],
  exports: [
    HomeComponent
  ]
})
export class PlaylistModule { }
