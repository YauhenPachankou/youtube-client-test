import {
  ChangeDetectionStrategy,
  EventEmitter,
  Component,
  Input,
  Output
} from '@angular/core';

import { VideoInfo } from 'src/app/videos/models/youtube-response.model';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoCardComponent {

  @Input() public btnText: string;

  @Input() public video: VideoInfo;

  @Output() public switchVideoStatus: EventEmitter<VideoInfo> = new EventEmitter<VideoInfo>();

  public switchVideoFavoriteStatus(): void {
    this.switchVideoStatus.emit(this.video);
  }

}
