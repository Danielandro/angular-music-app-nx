import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthService } from '@angular-music-app/music/data-access-auth';

export const musicFeatureAuthRoutes: Route[] = [];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: LoginComponent }])
  ],
  providers: [AuthService]
})
export class MusicFeatureAuthModule { }
