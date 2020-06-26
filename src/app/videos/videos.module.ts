import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as VideosFeature from 'src/app/videos/store/videos.reducer';
import { SharedModule } from 'src/app/shared/shared.module';
import { VideoCardComponent } from 'src/app/videos/components/video-card/video-card.component';
import { HomeComponent } from 'src/app/videos/pages/home/home.component';
import { FavoritesComponent } from 'src/app/videos/pages/favorites/favorites.component';
import { VideosEffects } from 'src/app/videos/store/videos.effects';

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
