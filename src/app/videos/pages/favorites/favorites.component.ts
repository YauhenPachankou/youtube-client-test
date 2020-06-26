import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as VideosSelectors from 'src/app/videos/store/videos.selectors';
import * as VideosActions from 'src/app/videos/store/videos.actions';
import { VideoInfo } from 'src/app/videos/models/youtube-response.model';
import { AppState } from 'src/app/videos/store/videos.selectors';
import { trackByFn } from 'src/app/core/utils/trackBy';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  public trackByFn = trackByFn;

  public bntText = 'remove from favorites';

  public favoriteVideos$: Observable<VideoInfo[]>;

  constructor(
    private store: Store<AppState>,
  ) {}

  public ngOnInit(): void {
    this.favoriteVideos$ = this.store.pipe(select(VideosSelectors.selectFavoriteVideosByFilteringWord));
  }

  public onRemoveVideoFromFavorites(video): void {
    this.store.dispatch(VideosActions.removeVideoFromFavorites({video}));
  }

}
