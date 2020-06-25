import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import * as VideosActions from './videos.actions';
import { LoadVideosService } from '../services/load-videos.service';

@Injectable()
export class VideosEffects {

  constructor(
    private actions$: Actions,
    private loadVideosService: LoadVideosService
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

}
