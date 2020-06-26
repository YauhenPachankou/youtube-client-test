import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, mergeMap, tap, withLatestFrom } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as VideosActions from 'src/app/videos/store/videos.actions';
import { VideosActionsTypes } from 'src/app/videos/store/videos.actions';
import { LoadVideosService } from 'src/app/videos/services/load-videos.service';
import { AppState, selectFavoriteVideos } from 'src/app/videos/store/videos.selectors';

@Injectable()
export class VideosEffects {

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private loadVideosService: LoadVideosService,
  ) {}

  public loadVideos$ = createEffect(() => this.actions$.pipe(
    ofType(VideosActions.VideosActionsTypes.LOAD_VIDEOS),
    mergeMap(() => this.loadVideosService.fetchVideos()
      .pipe(
        map(youtubeResponse => (VideosActions.addVideosToState({youtubeResponse}))),
        catchError(() => EMPTY)
      ))
    )
  );

  public saveToLocalStorage = createEffect(() => this.actions$.pipe(
    ofType(VideosActionsTypes.REMOVE_VIDEO_FROM_FAVORITES, VideosActions.VideosActionsTypes.ADD_VIDEO_TO_FAVORITES),
    concatMap(action => of(action).pipe(
      withLatestFrom(this.store.pipe(select(selectFavoriteVideos))))
    ))
      .pipe(
        tap(([, favoriteVideos]) => localStorage.setItem('favoriteVideos', JSON.stringify(favoriteVideos)))
      ),
    { dispatch: false }
  );

}
