import { VideoInfo } from 'src/app/videos/models/youtube-response.model';

export const filterVideos = (filteringWord: string) =>
  (video: VideoInfo) => video.snippet.title.toLowerCase().includes(filteringWord.toLowerCase());
