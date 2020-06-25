import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as VideosActions from './videos/store/videos.actions';
import { AppState } from './videos/store/videos.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private store: Store<AppState>) {}

  public ngOnInit(): void {
    this.store.dispatch(VideosActions.loadVideos());
  }

}
