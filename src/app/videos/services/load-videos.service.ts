import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { YoutubeResponse } from '../models/youtube-response.model';

@Injectable({
  providedIn: 'root'
})
export class LoadVideosService {

  private readonly YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/videos';

  private pageToken = '';

  constructor(
    private http: HttpClient,
  ) {}

  public fetchVideos(): Observable<YoutubeResponse> {
    return this.http.get<YoutubeResponse>(this.YOUTUBE_API_URL, {
      params: new HttpParams({
        fromObject: {
          part: 'snippet,contentDetails,statistics',
          chart: 'mostPopular',
          maxResults: `50`,
          pageToken: this.pageToken,
          key: environment.youtubeAPIKey,
        }
      })
    })
      .pipe(
        tap((response) => this.pageToken = response.nextPageToken)
      )
  }

}
