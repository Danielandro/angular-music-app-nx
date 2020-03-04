import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

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
    RouterModule.forChild([
      { path: "", component: HomeComponent }
    ]),
    NgxsModule.forFeature([])
  ],
  exports: [
    HomeComponent
  ]
})
export class PlaylistModule { }
