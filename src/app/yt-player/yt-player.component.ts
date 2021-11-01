import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';
import { fromEvent } from 'rxjs';
import { LocalStorageService } from '../core/services/local-storage.service';
import { LyricsService } from '../services/lyrics.service';

@Component({
  selector: 'app-yt-player',
  templateUrl: './yt-player.component.html',
  styleUrls: ['./yt-player.component.scss'],
})
export class YtPlayerComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() videoId: string;
  @Input() isResposive: boolean = true;
  public playerWidth = 200;
  public playerHeight = 200;
  public isLoading: boolean = true;
  @ViewChild('player') ytPlayerEl: YouTubePlayer;
  @ViewChild('videoContainer') ytPlayerContainer: ElementRef<HTMLDivElement>;
  private windowResizeObservable = fromEvent(window, 'resize');

  constructor(
    private lyricService: LyricsService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }
  ngAfterViewInit(): void {
    setInterval(() => {
      if (this.ytPlayerEl) {
        this.lyricService.setSongCurrentTime(this.ytPlayerEl.getCurrentTime()),
          20;
      }
    });
    if (this.isResposive) {
      this.setPlayerDimensions();
      this.windowResizeObservable.subscribe((ev) => this.setPlayerDimensions());
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.isLoading = true;
    /* setTimeout is required here because we want angular change detection
    to run and destory the youtube-player component and re-render it */
    setTimeout(() => {
      this.isLoading = false;
    });
  }

  private setPlayerDimensions() {
    const dimensions =
      this.ytPlayerContainer.nativeElement.getBoundingClientRect();
    this.playerWidth = dimensions.width;
  }

  public getVideoDetails(e: any) {
    let ytVideoTitle = e.target.getVideoData();
    // TODO: '-' characters  and multiple whitespaces seems to break the lyric search api, implement backend fix
    ytVideoTitle = ytVideoTitle.title
      .replace('-', '')
      .replace(/  +/g, ' ')
      .replace('.', '');
    this.lyricService.setSongDetails({ title: ytVideoTitle, artist: '' });
    this.localStorageService.setRecentlyViewed({
      id: this.videoId,
      title: ytVideoTitle,
    });
    // since title part will contain title and artist passing only title
  }
}
