import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { LocalStorageService } from './core/services/local-storage.service';
import { VIDEO_LIST_TYPES } from './shared/constants';
import { YTVideo } from './shared/interfaces/ytvideo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'lyr-find';
  audioSrc: SafeUrl;
  audioFile: File;
  public videoListTypes = { ...VIDEO_LIST_TYPES };
  public currentVideoListType: VIDEO_LIST_TYPES =
    VIDEO_LIST_TYPES.popularVideos;
  public isVideoListHidden = false;
  public youtubeVideoUrl: string;
  public youtubeVideoId: string;
  public popularVideos: Array<YTVideo> = [
    {
      id: '8sgycukafqQ',
      title: "What I've Done [Official Music Video] Linkin Park",
    },
    {
      id: 'YykjpeuMNEk',
      title: 'Coldplay Hymn For The Weekend (Official Video)',
    },
    { id: '7wtfhZwyrcc', title: 'Imagine Dragons Believer' },
    { id: 'HdWw9SksiwQ', title: 'Fade To Black' },
    { id: '0obBdrfUMzU', title: 'Master of Puppets (Remastered)' },
    { id: 'r00ikilDxW4', title: 'Green Day 21 Guns [Official Music Video]' },
    {
      id: 'XXYlFuWEuKI',
      title: 'The Weeknd Save Your Tears (Official Music Video)',
    },
  ];
  public videoList: Array<YTVideo> = this.popularVideos;

  constructor(
    private domSanitizer: DomSanitizer,
    private localStorageService: LocalStorageService
  ) {}

  public readSelectedFiles(event: any) {
    this.audioFile = event.target.files[0];
    this.audioSrc = this.domSanitizer.bypassSecurityTrustUrl(
      URL.createObjectURL(this.audioFile)
    );
  }

  public readYtUrl(e: any) {
    this.youtubeVideoUrl = e.target.value;
    this.youtubeVideoId = this.youtubeVideoUrl.split('?v=')[1];
    this.isVideoListHidden = true;
    console.log(e.target.value);
  }

  public setSelectedVideoId(videoId: string) {
    this.isVideoListHidden = true;
    this.youtubeVideoId = videoId;
  }

  public toggleVideoList(videoType: VIDEO_LIST_TYPES) {
    if (videoType === VIDEO_LIST_TYPES.popularVideos) {
      this.videoList = this.popularVideos;
    } else if (videoType === VIDEO_LIST_TYPES.recentlyWatched) {
      this.videoList = this.localStorageService.getRecentlyViewed().reverse(); // reverse so that last viewed video is shown first
    }
    if (this.currentVideoListType === videoType) {
      this.isVideoListHidden = !this.isVideoListHidden;
    } else {
      this.currentVideoListType = videoType;
      this.isVideoListHidden = false;
    }
  }
}
