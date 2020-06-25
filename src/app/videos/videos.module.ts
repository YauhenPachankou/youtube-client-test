import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as VideosFeature from './store/videos.reducer';
import { SharedModule } from '../shared/shared.module';
import { VideoCardComponent } from './components/video-card/video-card.component';
import { HomeComponent } from './pages/home/home.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { VideosEffects } from './store/videos.effects';

@NgModule({
  declarations: [
    VideoCardComponent,
    HomeComponent,
    FavoritesComponent,
  ],
  imports: [
    SharedModule,
    StoreModule.forFeature(VideosFeature.videosFeatureKey, VideosFeature.reducer),
    EffectsModule.forFeature([VideosEffects])
  ]
})
export class VideosModule { }
