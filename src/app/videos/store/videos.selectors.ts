import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as videosFeature from 'src/app/videos/store/videos.reducer';
import { VideoInfo } from 'src/app/videos/models/youtube-response.model';
import { filterVideos } from 'src/app/videos/utils/filter-videos.util';

export interface AppState {
  videos: videosFeature.VideosState;
}

export const selectVideosFeature = createFeatureSelector<AppState, videosFeature.VideosState>(videosFeature.videosFeatureKey);

export const selectAllVideos = createSelector(
  selectVideosFeature,
  (state: videosFeature.VideosState) => state.videos
);

export const selectFavoriteVideos = createSelector(
  selectVideosFeature,
  (state: videosFeature.VideosState) => state.favoriteVideos
);

export const selectFilteringWord = createSelector(
  selectVideosFeature,
  (state: videosFeature.VideosState) => state.filteringWord
);

export const selectAllVideosByFilteringWord = createSelector(
  selectAllVideos,
  selectFilteringWord,
  (allVideos: VideoInfo[], filteringWord: string) => allVideos.filter(filterVideos(filteringWord)));

export const selectFavoriteVideosByFilteringWord = createSelector(
  selectFavoriteVideos,
  selectFilteringWord,
  (favoriteVideos: VideoInfo[], filteringWord: string) => favoriteVideos.filter(filterVideos(filteringWord)));
