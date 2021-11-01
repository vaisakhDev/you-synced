import { Injectable } from '@angular/core';
import { LOCAL_STORAGE_KEYS } from 'src/app/shared/constants';
import { YTVideo } from 'src/app/shared/interfaces/ytvideo';

@Injectable()
export class LocalStorageService {
  constructor() {}

  public getRecentlyViewed(): Array<YTVideo> {
    const key = LOCAL_STORAGE_KEYS.recentlyWatched;
    // https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator
    return JSON.parse(localStorage.getItem(key)!) || [];
  }

  public setRecentlyViewed(videoDetails: YTVideo) {
    const recentlyViewed = this.getRecentlyViewed() || [];
    if (recentlyViewed.some((video) => video.id === videoDetails.id)) {
      return;
    }
    recentlyViewed.push(videoDetails);
    const recentlyViewedObjectString = JSON.stringify(recentlyViewed);
    localStorage.setItem(
      LOCAL_STORAGE_KEYS.recentlyWatched,
      recentlyViewedObjectString
    );
  }
}
