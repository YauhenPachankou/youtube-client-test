import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as videosFeature from './videos.reducer';
import { VideoInfo } from '../models/youtube-response.model';

export interface AppState {
  videos: videosFeature.VideosState
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
  (allVideos: VideoInfo[], filteringWord: string) => allVideos.filter((video) => video.snippet.title.toLowerCase().includes(filteringWord.toLowerCase()))
);

export const selectFavoriteVideosByFilteringWord = createSelector(
  selectFavoriteVideos,
  selectFilteringWord,
  (favoriteVideos: VideoInfo[], filteringWord: string) => favoriteVideos.filter((video) => video.snippet.title.toLowerCase().includes(filteringWord.toLowerCase()))
);
