import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { LyricHolderComponent } from './lyric-holder/lyric-holder.component';
import { CoreModule } from './core/core.module';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { YtPlayerModule } from './yt-player/yt-player.module';

@NgModule({
  declarations: [
    AppComponent,
    LyricHolderComponent,
    AudioPlayerComponent
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
