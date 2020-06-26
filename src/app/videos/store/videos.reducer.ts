import { createReducer, on, Action } from '@ngrx/store';

import * as VideosActions from 'src/app/videos/store/videos.actions';
import { VideoInfo } from 'src/app/videos/models/youtube-response.model';

export const videosFeatureKey = 'videos';

export interface VideosState {
  videos: VideoInfo[];
  favoriteVideos: VideoInfo[];
  filteringWord: string;
}

const initialVideosState: VideosState = {
  videos: [],
  favoriteVideos: JSON.parse(localStorage.getItem('favoriteVideos')) || [],
  filteringWord: '',
};

const videosReducer = createReducer(
  initialVideosState,
  on(VideosActions.addVideosToState, (state, {youtubeResponse}) => ({
    ...state,
    videos: [...state.videos, ...youtubeResponse.items],
  })),
  on(VideosActions.addVideoToFavorites, (state, {video}) => {
    let favoriteVideos = [...state.favoriteVideos];

    if (!state.favoriteVideos.find((item) => item.id === video.id)) {
      favoriteVideos = [...state.favoriteVideos, video];
    }

    return {
      ...state,
      favoriteVideos
    };
  }),
  on(VideosActions.removeVideoFromFavorites, (state, {video}) => ({
      ...state,
      favoriteVideos: state.favoriteVideos.filter(item => item.id !== video.id)
  })),
  on(VideosActions.updateFilteringWord, ((state, {filteringWord}) => ({...state, filteringWord})))
);

export function reducer(state: VideosState, action: Action) {
  return videosReducer(state, action);
}

