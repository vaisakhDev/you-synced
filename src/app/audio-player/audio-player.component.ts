import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import * as jsmediatags from 'jsmediatags';
import { LyricsService } from '../services/lyrics.service';
@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() src: SafeUrl;
  @Input() songFile: any;
  @ViewChild('audio') audioPlayer : ElementRef;

  constructor(private lyricService: LyricsService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.audioPlayer && this.src){
      this.getSongTags(this.songFile);
      this.audioPlayer.nativeElement.load();
    }
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log(this.audioPlayer);
  }

  public audioTimeUpdate(e:Event){
    const audioEl : HTMLAudioElement = this.audioPlayer.nativeElement;
    this.lyricService.setSongCurrentTime(audioEl.currentTime);
  }

  private getSongTags = (songFile: File) => {
    jsmediatags.read(songFile, {
        onSuccess: (tag: any) => {
            console.log('Success!');
            console.log(tag.tags.title, tag.tags.artist);
            this.lyricService.setSongDetails({title: tag.tags.title, artist:tag.tags.artist})
        },
        onError: (error: any) => {
            console.log('Error');
        }
    });
  }

}
