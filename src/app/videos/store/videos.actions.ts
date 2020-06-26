import { createAction, props } from '@ngrx/store';

import { VideoInfo, YoutubeResponse } from 'src/app/videos/models/youtube-response.model';

export const enum VideosActionsTypes {
  LOAD_VIDEOS = '[Main Page] Load videos',
  ADD_VIDEOS_TO_STATE = '[Main Page] Add videos to state',
  ADD_VIDEO_TO_FAVORITES = '[Main Page] Add video to favorites',
  REMOVE_VIDEO_FROM_FAVORITES = '[Main Page] Remove video from favorites',
  UPDATE_FILTERING_WORD = '[Main Page] Update filtering word'
}

export const loadVideos = createAction(VideosActionsTypes.LOAD_VIDEOS);

export const addVideosToState = createAction(
  VideosActionsTypes.ADD_VIDEOS_TO_STATE,
  props<{youtubeResponse: YoutubeResponse}>()
);

export const addVideoToFavorites = createAction(
  VideosActionsTypes.ADD_VIDEO_TO_FAVORITES,
  props<{video: VideoInfo}>()
);

export const removeVideoFromFavorites = createAction(
  VideosActionsTypes.REMOVE_VIDEO_FROM_FAVORITES,
  props<{video: VideoInfo}>()
);

export const updateFilteringWord = createAction(
  VideosActionsTypes.UPDATE_FILTERING_WORD,
  props<{filteringWord: string}>()
);
