import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LOCAL_STORAGE_KEYS } from 'src/app/shared/constants';
import { YTVideo } from 'src/app/shared/interfaces/ytvideo';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
})
export class VideoListComponent implements OnInit {
  @Input() public videos: Array<YTVideo>;
  @Output() videoIdSelectedEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  public emitSelectedVideoId(videoId: string) {
    console.log(LOCAL_STORAGE_KEYS);
    this.videoIdSelectedEvent.emit(videoId);
  }
}
