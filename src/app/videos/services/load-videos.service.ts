import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { YoutubeResponse } from 'src/app/videos/models/youtube-response.model';

@Injectable({
  providedIn: 'root'
})
export class LoadVideosService {

  private pageToken: string;

  constructor(private http: HttpClient) {}

  public fetchVideos(): Observable<YoutubeResponse> {
    return this.http.get<YoutubeResponse>(environment.youtubeApiUrl, {
      params: new HttpParams({
        fromObject: {
          part: 'snippet,contentDetails,statistics',
          chart: 'mostPopular',
          maxResults: `50`,
          pageToken: this.pageToken || '',
          key: environment.youtubeApiKey,
        }
      })
    })
      .pipe(
        tap((response) => this.pageToken = response.nextPageToken)
      );
  }

}
