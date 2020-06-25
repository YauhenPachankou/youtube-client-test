import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as VideosActions from '../../store/videos.actions';
import * as VideosSelectors from '../../store/videos.selectors';
import { AppState } from '../../store/videos.selectors';
import { VideoInfo } from '../../models/youtube-response.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public bntText = 'add to favorites'

  public videos$: Observable<VideoInfo[]>;

  constructor(
    private store: Store<AppState>,
  ) { }

  public ngOnInit(): void {
    this.videos$ = this.store.pipe(select(VideosSelectors.selectAllVideosByFilteringWord));
  }

  public addVideoToFavorites(video): void {
    this.store.dispatch(VideosActions.addVideoToFavorites({video}));
  }

}
