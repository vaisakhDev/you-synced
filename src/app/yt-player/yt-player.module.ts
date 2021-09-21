import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YtPlayerComponent } from './yt-player.component';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  declarations: [
    YtPlayerComponent
  ],
  imports: [
    CommonModule,
    YouTubePlayerModule
  ],
  exports: [YtPlayerComponent]
})
export class YtPlayerModule { }
