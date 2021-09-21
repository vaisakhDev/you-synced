import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ISongDetails } from '../song-details';

@Injectable({
  providedIn: 'root'
})
export class LyricsService {

  private songInfoSubject = new Subject<ISongDetails>();
  private songCurrentTimeSubject = new Subject<number>();

  public setSongDetails(songInfo: ISongDetails){
    this.songInfoSubject.next(songInfo);
  }

  public setSongCurrentTime(time: number) {
    this.songCurrentTimeSubject.next(time);
  }

  public getSongDetails(): Observable<ISongDetails> {
    return this.songInfoSubject.asObservable();
  }

  public getSongCurrentTime(): Observable<number> {
    return this.songCurrentTimeSubject.asObservable();
  }



}
