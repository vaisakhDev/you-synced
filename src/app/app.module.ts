import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { LyricHolderComponent } from './lyric-holder/lyric-holder.component';
import { CoreModule } from './core/core.module';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { YtPlayerModule } from './yt-player/yt-player.module';
import { VideoListCarousalComponent } from './video-list-carousal/video-list-carousal.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { GetYtThumbnailLinkPipe } from './shared/pipes/get-yt-thumbnail-link.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LyricHolderComponent,
    AudioPlayerComponent,
    VideoListCarousalComponent,
    VideoListComponent,
    GetYtThumbnailLinkPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    YtPlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
