import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';
import { LyricsService } from '../services/lyrics.service';

@Component({
  selector: 'app-yt-player',
  templateUrl: './yt-player.component.html',
  styleUrls: ['./yt-player.component.scss']
})
export class YtPlayerComponent implements OnInit, AfterViewInit{
  @Input() videoUrl: string;
  public videoID: string;
  @ViewChild('player') ytPlayerEl: YouTubePlayer;

  constructor(private lyricService: LyricsService) { }

  ngOnInit(): void {
    this.videoID = this.videoUrl.split('?v=')[1];
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }
   ngAfterViewInit(): void {
     console.log(this.ytPlayerEl);
     setInterval(() => this.lyricService.setSongCurrentTime(this.ytPlayerEl.getCurrentTime()), 20)
     
   }

  public getVideoDetails(e: any){
    let ytVideoTitle = e.target.getVideoData();
    // TODO: '-' characters  and multiple whitespaces seems to break the lyric search api, implement backend fix
    ytVideoTitle = ytVideoTitle.title.replace('-','').replace(/  +/g,' ').replace('.','');
    this.lyricService.setSongDetails({title: ytVideoTitle, artist:''});
    // since title part will contain title and artist passing only title
    console.log(ytVideoTitle);
  }

}
