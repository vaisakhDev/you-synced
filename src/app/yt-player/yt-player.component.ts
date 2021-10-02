import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';
import { fromEvent } from 'rxjs';
import { LyricsService } from '../services/lyrics.service';

@Component({
  selector: 'app-yt-player',
  templateUrl: './yt-player.component.html',
  styleUrls: ['./yt-player.component.scss']
})
export class YtPlayerComponent implements OnInit, AfterViewInit, OnChanges{
  @Input() videoUrl: string;
  public playerWidth = 200;
  public playerHeight = 200; 
  public videoID: string;
  public isLoading: boolean = true;
  @ViewChild('player') ytPlayerEl: YouTubePlayer;
  @ViewChild('videoContainer') ytPlayerContainer: ElementRef<HTMLDivElement>;
  private windowResizeObservable  =  fromEvent(window, 'resize');

  constructor(private lyricService: LyricsService) { }

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }
  ngAfterViewInit(): void {
    setInterval(() => this.lyricService.setSongCurrentTime(this.ytPlayerEl.getCurrentTime()), 20);
    this.setPlayerDimensions();
    this.windowResizeObservable.subscribe(ev => this.setPlayerDimensions());
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.isLoading = true;
    /* setTimeout is required here because we want angular change detection
    to run and destory the youtube-player component and re-render it */
    setTimeout(() => {
      this.videoID = this.videoUrl.split('?v=')[1]; 
      this.isLoading = false;
    });
  }

  private setPlayerDimensions() {
    const dimensions = this.ytPlayerContainer.nativeElement.getBoundingClientRect();
    this.playerWidth = dimensions.width;
  }

  public getVideoDetails(e: any){
    let ytVideoTitle = e.target.getVideoData();
    // TODO: '-' characters  and multiple whitespaces seems to break the lyric search api, implement backend fix
    ytVideoTitle = ytVideoTitle.title.replace('-','').replace(/  +/g,' ').replace('.','');
    this.lyricService.setSongDetails({title: ytVideoTitle, artist:''});
    // since title part will contain title and artist passing only title
  }

}
