import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';

import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
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
      key: 'playlist'
    })
  ]
})
export class CoreModule { }
