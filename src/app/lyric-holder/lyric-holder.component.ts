import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ApiEndpointsService } from '../core/services/api-endpoints.service';
import { ApiHttpService } from '../core/services/api-http.service';
import { LyricsService } from '../services/lyrics.service';
import { ISongDetails } from '../song-details';

@Component({
  selector: 'app-lyric-holder',
  templateUrl: './lyric-holder.component.html',
  styleUrls: ['./lyric-holder.component.scss']
})
export class LyricHolderComponent implements OnInit {
  @ViewChild('lyricBody') lyricBody: ElementRef<any>;
  public lyricDataObj: Array<{id: number, time: number, text:string}>;
  private lyricIndex: number = 0;
  public lyrics: Array<string> = [];
  public currTime:number;

  constructor(private httpService: ApiHttpService,private endPointService: ApiEndpointsService, private lyricService: LyricsService) { }

  ngOnInit(): void {
    this.lyricService.getSongDetails()
      .subscribe((songDetails: ISongDetails) => {
        // clear the existing lyrics everytime the song changes
        this.lyricDataObj = [];
        this.fetchLyrics(songDetails);
      });

    setInterval(() => {
      if(this.lyricBody){   
        const el = this.lyricBody.nativeElement.getElementsByClassName('current');
        if (el.length > 0) {
          this.setFocusOnDivWithId(el[0]);
        }
      }
    }, 250);
  }

  private setFocusOnDivWithId(element: HTMLElement) {   
    const scrollIntoViewOptions: ScrollIntoViewOptions = { behavior: "smooth", block: "center" };   
    element.scrollIntoView(scrollIntoViewOptions); };

  // private syncLyrics = (currentTime: number) => {
  //   if (this.lyricDataObj) {
  //       const line = this.lyricDataObj[this.lyricIndex + 1];
  //       //const nextTimeTag = Number(line.time.split(':')[0]) * 60 + Number(line.time.split(':')[1]);
  //       if (currentTime > line.time) {
  //           this.lyricIndex += 1;
  //           const currLine = this.lyricDataObj[this.lyricIndex];
  //           console.log(currLine.text);
  //           this.lyrics.push(currLine.text);
  //       }
  //   }
  // }

  private fetchLyrics(song: ISongDetails){
    console.log(song);
    this.httpService
      .get(this.endPointService.getLyricsEndpoint(song.title, song.artist))
      .subscribe((res: any) => {
        this.createLyricDataObject(res.data);
        this.lyrics.push(this.lyricDataObj[0].text); // push first lyric line by default
        this.lyricService.getSongCurrentTime()
          .subscribe(time => {
            // this.syncLyrics(time);
            this.currTime = time;
          })
      })
  }

  private createLyricDataObject = (rawLyrics: string) => {
    this.lyricDataObj = rawLyrics.split('\n')
        .filter(rawLine => rawLine && rawLine.split(']')[1])
        .map((line, index) => {
            let parts = line.split(']');
            const timeStr = parts[0].replace('[', '');  
            return {
                id: index,
                time: Number(timeStr.split(':')[0]) * 60 + Number(timeStr.split(':')[1]), 
                text: parts[1]
            }
        });
    console.log(this.lyricDataObj);
  };
}
