import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import * as VideosActions from 'src/app/videos/store/videos.actions';
import { AppState } from 'src/app/videos/store/videos.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  public form: FormGroup;

  constructor(
    private store: Store<AppState>,
    private formBuilder: FormBuilder
  ) {}

  public ngOnInit(): void {
    this.form = this.formBuilder.group({
      filter: ['']
    });

    this.subscription = this.form.valueChanges
     .pipe(
       debounceTime(500),
       distinctUntilChanged()
     )
     .subscribe(
       ({filter}) => {
         this.store.dispatch(VideosActions.updateFilteringWord({filteringWord: filter}));
       }
     );
  }

  public loadMore(): void {
    this.store.dispatch(VideosActions.loadVideos());
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
