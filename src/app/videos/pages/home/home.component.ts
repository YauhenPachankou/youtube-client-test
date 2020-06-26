import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as VideosActions from 'src/app/videos/store/videos.actions';
import * as VideosSelectors from 'src/app/videos/store/videos.selectors';
import { AppState } from 'src/app/videos/store/videos.selectors';
import { VideoInfo } from 'src/app/videos/models/youtube-response.model';
import { trackByFn } from 'src/app/core/utils/trackBy';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public trackByFn = trackByFn;

  public bntText = 'add to favorites';

  public videos$: Observable<VideoInfo[]>;

  constructor(
    private store: Store<AppState>
  ) { }

  public ngOnInit(): void {
    this.videos$ = this.store.pipe(select(VideosSelectors.selectAllVideosByFilteringWord));
  }

  public onAddVideoToFavorites(video): void {
    this.store.dispatch(VideosActions.addVideoToFavorites({video}));
  }

}
