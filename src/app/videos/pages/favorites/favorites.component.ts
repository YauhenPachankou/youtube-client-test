import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as VideosSelectors from '../../store/videos.selectors';
import * as VideosActions from '../../store/videos.actions';
import { VideoInfo } from '../../models/youtube-response.model';
import { AppState } from '../../store/videos.selectors';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  public bntText = 'remove from favorites';

  public favoriteVideos$: Observable<VideoInfo[]>;

  constructor(
    private store: Store<AppState>,
  ) {}

  public ngOnInit(): void {
    this.favoriteVideos$ = this.store.pipe(select(VideosSelectors.selectFavoriteVideosByFilteringWord));
  }

  public removeVideoFromFavorites(video): void {
    this.store.dispatch(VideosActions.removeVideoFromFavorites({video}));
  }

}
