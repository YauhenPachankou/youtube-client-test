import {
  ChangeDetectionStrategy,
  EventEmitter,
  Component,
  Input,
  Output
} from '@angular/core';

import { VideoInfo } from '../../models/youtube-response.model';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoCardComponent {

  @Input() public btnText: string;

  @Input() public video: VideoInfo;

  @Output() public onSwitchVideoStatus: EventEmitter<VideoInfo> = new EventEmitter<VideoInfo>();

  public switchVideoStatus(): void {
    this.onSwitchVideoStatus.emit(this.video);
  }

}
